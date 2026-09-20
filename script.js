/* =====================================================
   DATA
===================================================== */

const topology = {

    A: {
        name: "GEDUNG A",
        panels: {

            A1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            A2: [
                ["16 A", "1 Phase"],
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            A3: [
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ]
        }
    },


    B: {
        name: "GEDUNG B",
        panels: {

            B1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            B2: [
                ["16 A", "1 Phase"],
                ["20 A", "1 Phase"],
                ["40 A", "3 Phase"]
            ]
        }
    },


    C: {
        name: "GEDUNG C",
        panels: {

            C1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["20 A", "3 Phase"]
            ],

            C2: [
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            C3: [
                ["16 A", "1 Phase"],
                ["32 A", "3 Phase"],
                ["40 A", "3 Phase"]
            ]
        }
    },


    D: {
        name: "GEDUNG D",
        panels: {

            D1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            D2: [
                ["16 A", "1 Phase"],
                ["20 A", "3 Phase"],
                ["40 A", "3 Phase"]
            ]
        }
    },


    E: {
        name: "GEDUNG E",
        panels: {

            E1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ],

            E2: [
                ["20 A", "1 Phase"],
                ["32 A", "3 Phase"]
            ]
        }
    },


    F: {
        name: "GEDUNG F",
        panels: {

            F1: [
                ["10 A", "1 Phase"],
                ["16 A", "1 Phase"],
                ["20 A", "3 Phase"]
            ],

            F2: [
                ["16 A", "1 Phase"],
                ["32 A", "3 Phase"],
                ["40 A", "3 Phase"],
                ["63 A", "3 Phase"]
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
   VIEW
===================================================== */

function hideViews() {

    sourceView.classList.remove("active");

    buildingView.classList.remove("active");

    panelView.classList.remove("active");

    mcbView.classList.remove("active");
}


/* =====================================================
   SUMBER → GEDUNG
===================================================== */

function openBuildings() {

    level = "building";

    hideViews();

    buildingView.classList.add("active");

    backButton.style.visibility = "visible";

    updateBreadcrumb("building");

    renderBuildings();
}


/* =====================================================
   GEDUNG
===================================================== */

function renderBuildings() {

    const container =
        document.getElementById(
            "buildingTopology"
        );

    container.innerHTML = "";


    Object.entries(topology)
        .forEach(
            ([key, building], index) => {

                const branch =
                    document.createElement("div");

                branch.className =
                    "building-branch";


                branch.innerHTML = `

                    <div
                        class="building-box">

                        <div class="building-icon">
                            🏢
                        </div>

                        <div class="building-name">
                            ${building.name}
                        </div>

                        <div class="building-panel-count">
                            ${
                                Object.keys(
                                    building.panels
                                ).length
                            }
                            PANEL
                        </div>

                    </div>

                `;


                branch.onclick = () => {

                    openPanels(key);

                };


                container.appendChild(branch);


                setTimeout(() => {

                    branch.classList.add("show");

                }, 150 + index * 120);

            }
        );
}


/* =====================================================
   GEDUNG → PANEL
===================================================== */

function openPanels(buildingKey) {

    selectedBuilding =
        buildingKey;

    level = "panel";

    hideViews();

    panelView.classList.add("active");

    backButton.style.visibility =
        "visible";


    document.getElementById(
        "buildingTitle"
    ).textContent =
        topology[
            buildingKey
        ].name;


    updateBreadcrumb("panel");

    renderPanels();
}


/* =====================================================
   PANEL
===================================================== */

function renderPanels() {

    const container =
        document.getElementById(
            "panelTopology"
        );

    container.innerHTML = "";


    const panels =
        topology[
            selectedBuilding
        ].panels;


    Object.entries(panels)
        .forEach(
            ([name, data], index) => {

                const branch =
                    document.createElement("div");

                branch.className =
                    "panel-branch";


                branch.innerHTML = `

                    <div class="panel-box">

                        <div class="panel-icon">
                            ⚡
                        </div>

                        <div class="panel-name">
                            PANEL ${name}
                        </div>

                        <div class="panel-count">
                            ${data.length} MCB
                        </div>

                    </div>

                `;


                branch.onclick = () => {

                    openMCB(name);

                };


                container.appendChild(branch);


                setTimeout(() => {

                    branch.classList.add("show");

                }, 150 + index * 130);

            }
        );
}


/* =====================================================
   PANEL → MCB
===================================================== */

function openMCB(panelName) {

    selectedPanel =
        panelName;

    level = "mcb";

    hideViews();

    mcbView.classList.add("active");

    backButton.style.visibility =
        "visible";


    document.getElementById(
        "panelTitle"
    ).textContent =
        "PANEL " + panelName;


    document.getElementById(
        "panelName"
    ).textContent =
        "PANEL " + panelName;


    updateBreadcrumb("mcb");

    renderMCB();
}


/* =====================================================
   MCB
===================================================== */

function renderMCB() {

    const container =
        document.getElementById(
            "mcbTopology"
        );

    container.innerHTML = "";


    const data =
        topology[
            selectedBuilding
        ].panels[
            selectedPanel
        ];


    data.forEach(
        (item, index) => {

            const node =
                document.createElement("div");

            node.className =
                "mcb-node";


            const phaseClass =
                item[1] === "3 Phase"
                    ? "three"
                    : "";


            node.innerHTML = `

                <div class="mcb-number">
                    MCB ${String(
                        index + 1
                    ).padStart(2, "0")}
                </div>

                <div class="mcb-name">
                    Circuit Breaker
                </div>

                <div class="mcb-ampere">
                    ${item[0]}
                </div>

                <div class="
                    mcb-phase
                    ${phaseClass}">
                    ${item[1]}
                </div>

            `;


            container.appendChild(node);


            setTimeout(() => {

                node.classList.add("show");

            }, 150 + index * 120);

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

        sourceView.classList.add("active");

        backButton.style.visibility =
            "hidden";

        updateBreadcrumb("source");
    }
}


/* =====================================================
   BREADCRUMB
===================================================== */

function updateBreadcrumb(current) {

    const source =
        document.getElementById(
            "crumbSource"
        );

    const building =
        document.getElementById(
            "crumbBuilding"
        );

    const panel =
        document.getElementById(
            "crumbPanel"
        );


    source.classList.remove("active");

    building.classList.remove("active");

    panel.classList.remove("active");


    building.textContent = "-";

    panel.textContent = "-";


    if (current === "source") {

        source.classList.add("active");

    }


    if (current === "building") {

        source.classList.add("active");

        building.textContent =
            "GEDUNG";

        building.classList.add("active");

    }


    if (current === "panel") {

        building.textContent =
            topology[
                selectedBuilding
            ].name;

        building.classList.add("active");

        panel.textContent =
            "PANEL";

        panel.classList.add("active");

    }


    if (current === "mcb") {

        building.textContent =
            topology[
                selectedBuilding
            ].name;

        panel.textContent =
            "PANEL " +
            selectedPanel;

        panel.classList.add("active");

    }
}


/* =====================================================
   AWAL
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        backButton.style.visibility =
            "hidden";

        updateBreadcrumb("source");

    }
);
