/* =====================================================
   DATA TOPOLOGI

   Format:

   GEDUNG
      |
      └── PANEL
            |
            └── MCB

===================================================== */

const topology = {

    A: {
        name: "GEDUNG A",

        panels: {

            A1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            A2: [
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            A3: [
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ]

        }
    },


    B: {
        name: "GEDUNG B",

        panels: {

            B1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            B2: [
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }
    },


    C: {
        name: "GEDUNG C",

        panels: {

            C1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "3 Phase"
                }
            ],

            C2: [
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            C3: [
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                },
                {
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }
    },


    D: {
        name: "GEDUNG D",

        panels: {

            D1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            D2: [
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "3 Phase"
                },
                {
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }
    },


    E: {
        name: "GEDUNG E",

        panels: {

            E1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            E2: [
                {
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ]

        }
    },


    F: {
        name: "GEDUNG F",

        panels: {

            F1: [
                {
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "20 A",
                    phase: "3 Phase"
                }
            ],

            F2: [
                {
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    ampere: "32 A",
                    phase: "3 Phase"
                },
                {
                    ampere: "40 A",
                    phase: "3 Phase"
                },
                {
                    ampere: "63 A",
                    phase: "3 Phase"
                }
            ]

        }
    }

};


/* =====================================================
   STATE
===================================================== */

let level = "source";

let selectedBuilding = null;

let selectedPanel = null;


/* =====================================================
   ELEMENT
===================================================== */

const sourceView =
    document.getElementById("sourceView");

const buildingView =
    document.getElementById("buildingView");

const panelView =
    document.getElementById("panelView");

const mcbView =
    document.getElementById("mcbView");

const backButton =
    document.getElementById("backButton");


/* =====================================================
   BUKA GEDUNG
===================================================== */

function openBuildings() {

    level = "building";

    selectedBuilding = null;

    selectedPanel = null;

    hideViews();

    buildingView.classList.add("active");

    backButton.style.visibility = "visible";

    updatePath("building");

    renderBuildings();
}


/* =====================================================
   GEDUNG
===================================================== */

function renderBuildings() {

    const grid =
        document.getElementById(
            "buildingGrid"
        );

    grid.innerHTML = "";

    const buildings =
        Object.entries(topology);


    buildings.forEach(
        ([key, building], index) => {

            const node =
                document.createElement("div");

            node.className =
                "building-node";


            node.innerHTML = `

                <div
                    class="building-box"
                    title="Buka ${building.name}">

                    <div class="building-icon">
                        🏢
                    </div>

                    <div class="building-name">
                        ${building.name}
                    </div>

                    <div class="building-code">
                        ${Object.keys(building.panels).length}
                        PANEL
                    </div>

                </div>

            `;


            node.onclick = () => {

                openPanels(key);

            };


            grid.appendChild(node);


            setTimeout(() => {

                node.classList.add(
                    "visible"
                );

            }, 100 + index * 100);

        }
    );

}


/* =====================================================
   BUKA PANEL
===================================================== */

function openPanels(
    buildingKey
) {

    selectedBuilding =
        buildingKey;

    selectedPanel = null;

    level = "panel";

    hideViews();

    panelView.classList.add(
        "active"
    );

    backButton.style.visibility =
        "visible";


    document.getElementById(
        "buildingTitle"
    ).textContent =
        topology[
            buildingKey
        ].name;


    updatePath("panel");

    renderPanels();

}


/* =====================================================
   PANEL
===================================================== */

function renderPanels() {

    const grid =
        document.getElementById(
            "panelGrid"
        );

    grid.innerHTML = "";


    const panels =
        topology[
            selectedBuilding
        ].panels;


    const entries =
        Object.entries(panels);


    entries.forEach(
        ([name, mcb], index) => {

            const node =
                document.createElement("div");

            node.className =
                "panel-node";


            node.innerHTML = `

                <div class="panel-box">

                    <div class="panel-icon">
                        ⚡
                    </div>

                    <div class="panel-name">
                        PANEL ${name}
                    </div>

                    <div class="panel-info">
                        ${mcb.length} MCB
                    </div>

                </div>

            `;


            node.onclick = () => {

                openMCB(name);

            };


            grid.appendChild(node);


            setTimeout(() => {

                node.classList.add(
                    "visible"
                );

            }, 100 + index * 120);

        }
    );

}


/* =====================================================
   BUKA MCB
===================================================== */

function openMCB(
    panelName
) {

    selectedPanel =
        panelName;

    level = "mcb";

    hideViews();

    mcbView.classList.add(
        "active"
    );

    backButton.style.visibility =
        "visible";


    document.getElementById(
        "panelTitle"
    ).textContent =
        "PANEL " + panelName;


    document.getElementById(
        "panelSymbolName"
    ).textContent =
        "PANEL " + panelName;


    updatePath("mcb");

    renderMCB();

}


/* =====================================================
   MCB
===================================================== */

function renderMCB() {

    const list =
        document.getElementById(
            "mcbList"
        );

    list.innerHTML = "";


    const data =
        topology[
            selectedBuilding
        ].panels[
            selectedPanel
        ];


    data.forEach(
        (mcb, index) => {

            const item =
                document.createElement("div");

            item.className =
                "mcb-item";


            const phaseClass =
                mcb.phase === "3 Phase"
                    ? "three"
                    : "";


            item.innerHTML = `

                <div class="mcb-no">
                    MCB ${String(
                        index + 1
                    ).padStart(2, "0")}
                </div>

                <div class="mcb-name">
                    Circuit Breaker
                </div>

                <div class="mcb-ampere">
                    ${mcb.ampere}
                </div>

                <div class="
                    mcb-phase
                    ${phaseClass}
                ">
                    ${mcb.phase}
                </div>

            `;


            list.appendChild(item);


            setTimeout(() => {

                item.classList.add(
                    "visible"
                );

            }, 100 + index * 120);

        }
    );

}


/* =====================================================
   KEMBALI
===================================================== */

function goBack() {

    if (level === "mcb") {

        openPanels(
            selectedBuilding
        );

        return;
    }


    if (level === "panel") {

        openBuildings();

        return;
    }


    if (level === "building") {

        level = "source";

        selectedBuilding = null;

        selectedPanel = null;

        hideViews();

        sourceView.classList.add(
            "active"
        );

        backButton.style.visibility =
            "hidden";

        updatePath("source");

    }

}


/* =====================================================
   HIDE VIEW
===================================================== */

function hideViews() {

    sourceView.classList.remove(
        "active"
    );

    buildingView.classList.remove(
        "active"
    );

    panelView.classList.remove(
        "active"
    );

    mcbView.classList.remove(
        "active"
    );

}


/* =====================================================
   PATH / BREADCRUMB
===================================================== */

function updatePath(
    current
) {

    const source =
        document.getElementById(
            "pathSource"
        );

    const building =
        document.getElementById(
            "pathBuilding"
        );

    const panel =
        document.getElementById(
            "pathPanel"
        );


    source.classList.remove(
        "current"
    );

    building.classList.remove(
        "current"
    );

    panel.classList.remove(
        "current"
    );


    building.textContent = "-";

    panel.textContent = "-";


    if (current === "source") {

        source.textContent =
            "SUMBER PLN";

        source.classList.add(
            "current"
        );

    }


    if (current === "building") {

        source.textContent =
            "SUMBER PLN";

        source.classList.add(
            "current"
        );

        building.textContent =
            "GEDUNG";

        building.classList.add(
            "current"
        );

    }


    if (current === "panel") {

        source.textContent =
            "SUMBER PLN";

        building.textContent =
            topology[
                selectedBuilding
            ].name;

        building.classList.add(
            "current"
        );

        panel.textContent =
            "PANEL";

        panel.classList.add(
            "current"
        );

    }


    if (current === "mcb") {

        source.textContent =
            "SUMBER PLN";

        building.textContent =
            topology[
                selectedBuilding
            ].name;

        panel.textContent =
            "PANEL " +
            selectedPanel;

        panel.classList.add(
            "current"
        );

    }

}


/* =====================================================
   AWAL
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        level = "source";

        backButton.style.visibility =
            "hidden";

        updatePath("source");

    }
);
