/* =====================================================
   DATA TOPOLOGI
=====================================================

   Struktur:

   PLN
    └── Gedung
          └── Panel
                └── MCB

===================================================== */


const topologyData = {

    A: {

        name: "GEDUNG A",

        panels: {

            "A1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 04",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "A2": [
                {
                    name: "MCB 01",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "A3": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "20 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 04",
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }

    },


    B: {

        name: "GEDUNG B",

        panels: {

            "B1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "B2": [
                {
                    name: "MCB 01",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }

    },


    C: {

        name: "GEDUNG C",

        panels: {

            "C1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "20 A",
                    phase: "3 Phase"
                }
            ],

            "C2": [
                {
                    name: "MCB 01",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "C3": [
                {
                    name: "MCB 01",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "32 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }

    },


    D: {

        name: "GEDUNG D",

        panels: {

            "D1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 04",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "D2": [
                {
                    name: "MCB 01",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "20 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }

    },


    E: {

        name: "GEDUNG E",

        panels: {

            "E1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "32 A",
                    phase: "3 Phase"
                }
            ],

            "E2": [
                {
                    name: "MCB 01",
                    ampere: "20 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "32 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "40 A",
                    phase: "3 Phase"
                }
            ]

        }

    },


    F: {

        name: "GEDUNG F",

        panels: {

            "F1": [
                {
                    name: "MCB 01",
                    ampere: "10 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "20 A",
                    phase: "3 Phase"
                }
            ],

            "F2": [
                {
                    name: "MCB 01",
                    ampere: "16 A",
                    phase: "1 Phase"
                },
                {
                    name: "MCB 02",
                    ampere: "32 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 03",
                    ampere: "40 A",
                    phase: "3 Phase"
                },
                {
                    name: "MCB 04",
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

let currentLevel = "source";

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

const detailView =
    document.getElementById("detailView");

const buildingGrid =
    document.getElementById("buildingGrid");

const panelGrid =
    document.getElementById("panelGrid");

const backButton =
    document.getElementById("backButton");


/* =====================================================
   BUKA GEDUNG
===================================================== */

function openBuildings() {

    currentLevel = "building";

    selectedBuilding = null;

    selectedPanel = null;

    hideAllViews();

    buildingView.classList.add("active");

    backButton.style.visibility = "visible";

    updateBreadcrumb(
        "building"
    );

    renderBuildings();

}


/* =====================================================
   TAMPILKAN GEDUNG
===================================================== */

function renderBuildings() {

    buildingGrid.innerHTML = "";

    const buildingKeys =
        Object.keys(topologyData);


    buildingKeys.forEach(
        (key, index) => {

            const building =
                topologyData[key];


            const panelCount =
                Object.keys(
                    building.panels
                ).length;


            const card =
                document.createElement(
                    "button"
                );


            card.className =
                "building-card";


            card.innerHTML = `

                <div class="building-icon">
                    🏢
                </div>

                <div>

                    <span>
                        GEDUNG
                    </span>

                    <h3>
                        ${building.name}
                    </h3>

                    <small>
                        ${panelCount} PANEL
                    </small>

                </div>

                <div class="building-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openPanels(key);

                }
            );


            buildingGrid.appendChild(
                card
            );


            /*
             * Animasi muncul
             * satu per satu
             */

            setTimeout(
                () => {

                    card.classList.add(
                        "show"
                    );

                },
                100 + (index * 120)
            );

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

    selectedPanel =
        null;

    currentLevel =
        "panel";

    hideAllViews();

    panelView.classList.add(
        "active"
    );

    backButton.style.visibility =
        "visible";


    const building =
        topologyData[
            buildingKey
        ];


    document.getElementById(
        "selectedBuildingTitle"
    ).textContent =
        building.name;


    updateBreadcrumb(
        "panel"
    );


    renderPanels(
        buildingKey
    );

}


/* =====================================================
   TAMPILKAN PANEL
===================================================== */

function renderPanels(
    buildingKey
) {

    panelGrid.innerHTML = "";


    const building =
        topologyData[
            buildingKey
        ];


    const panels =
        Object.entries(
            building.panels
        );


    panels.forEach(
        ([panelName, mcbData]) => {


            const card =
                document.createElement(
                    "button"
                );


            card.className =
                "panel-card";


            card.innerHTML = `

                <div class="panel-icon">
                    ⚙
                </div>

                <h3>
                    PANEL ${panelName}
                </h3>

                <span>
                    ${building.name}
                </span>

                <div class="panel-mcb-count">
                    ${mcbData.length} MCB
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openPanelDetail(
                        panelName
                    );

                }
            );


            panelGrid.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   BUKA DETAIL PANEL
===================================================== */

function openPanelDetail(
    panelName
) {

    selectedPanel =
        panelName;

    currentLevel =
        "detail";

    hideAllViews();

    detailView.classList.add(
        "active"
    );

    backButton.style.visibility =
        "visible";


    const mcbData =
        topologyData[
            selectedBuilding
        ].panels[
            panelName
        ];


    /*
     * Judul
     */

    document.getElementById(
        "selectedPanelTitle"
    ).textContent =
        "PANEL " + panelName;


    document.getElementById(
        "detailPanelName"
    ).textContent =
        "PANEL " + panelName;


    /*
     * Jumlah MCB
     */

    document.getElementById(
        "mcbCount"
    ).textContent =
        mcbData.length;


    /*
     * Tabel
     */

    const tableBody =
        document.getElementById(
            "mcbTableBody"
        );


    tableBody.innerHTML = "";


    mcbData.forEach(
        (mcb, index) => {

            const row =
                document.createElement(
                    "tr"
                );


            const phaseClass =
                mcb.phase === "1 Phase"
                    ? "phase-1"
                    : "phase-3";


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${mcb.name}
                </td>

                <td>
                    ${mcb.ampere}
                </td>

                <td class="${phaseClass}">
                    ${mcb.phase}
                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );


    updateBreadcrumb(
        "detail"
    );

}


/* =====================================================
   KEMBALI
===================================================== */

function goBack() {


    /*
     * Detail → Panel
     */

    if (
        currentLevel ===
        "detail"
    ) {

        openPanels(
            selectedBuilding
        );

        return;

    }


    /*
     * Panel → Gedung
     */

    if (
        currentLevel ===
        "panel"
    ) {

        openBuildings();

        return;

    }


    /*
     * Gedung → Sumber
     */

    if (
        currentLevel ===
        "building"
    ) {

        currentLevel =
            "source";

        selectedBuilding =
            null;

        selectedPanel =
            null;

        hideAllViews();

        sourceView.classList.add(
            "active"
        );

        backButton.style.visibility =
            "hidden";

        updateBreadcrumb(
            "source"
        );

    }

}


/* =====================================================
   HIDE SEMUA VIEW
===================================================== */

function hideAllViews() {

    sourceView.classList.remove(
        "active"
    );

    buildingView.classList.remove(
        "active"
    );

    panelView.classList.remove(
        "active"
    );

    detailView.classList.remove(
        "active"
    );

}


/* =====================================================
   BREADCRUMB
===================================================== */

function updateBreadcrumb(
    level
) {

    const source =
        document.getElementById(
            "breadcrumbSource"
        );

    const building =
        document.getElementById(
            "breadcrumbBuilding"
        );

    const panel =
        document.getElementById(
            "breadcrumbPanel"
        );


    source.classList.remove(
        "active"
    );

    building.classList.remove(
        "active"
    );

    panel.classList.remove(
        "active"
    );


    building.textContent =
        "-";

    panel.textContent =
        "-";


    /*
     * LEVEL SOURCE
     */

    if (
        level === "source"
    ) {

        source.classList.add(
            "active"
        );

    }


    /*
     * LEVEL BUILDING
     */

    if (
        level === "building"
    ) {

        source.classList.add(
            "active"
        );

        building.textContent =
            "GEDUNG";

        building.classList.add(
            "active"
        );

    }


    /*
     * LEVEL PANEL
     */

    if (
        level === "panel"
    ) {

        source.classList.add(
            "active"
        );

        building.textContent =
            topologyData[
                selectedBuilding
            ].name;

        building.classList.add(
            "active"
        );

        panel.textContent =
            "PANEL";

        panel.classList.add(
            "active"
        );

    }


    /*
     * LEVEL DETAIL
     */

    if (
        level === "detail"
    ) {

        source.classList.add(
            "active"
        );

        building.textContent =
            topologyData[
                selectedBuilding
            ].name;

        building.classList.add(
            "active"
        );

        panel.textContent =
            "PANEL " +
            selectedPanel;

        panel.classList.add(
            "active"
        );

    }

}


/* =====================================================
   INITIAL STATE
===================================================== */

window.addEventListener(
    "load",
    () => {

        currentLevel =
            "source";

        backButton.style.visibility =
            "hidden";

        updateBreadcrumb(
            "source"
        );

    }
);
