// =====================================================
// DATA PANEL
// =====================================================

const panelData = {

    A: [
        {
            name: "MCB 01",
            ampere: "10 A",
            phase: "1 Phase"
        },
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
        },
        {
            name: "MCB 05",
            ampere: "40 A",
            phase: "3 Phase"
        }
    ],


    B: [
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
            ampere: "16 A",
            phase: "1 Phase"
        },
        {
            name: "MCB 04",
            ampere: "20 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 05",
            ampere: "32 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 06",
            ampere: "40 A",
            phase: "3 Phase"
        }
    ],


    C: [
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


    D: [
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
            ampere: "16 A",
            phase: "1 Phase"
        },
        {
            name: "MCB 04",
            ampere: "20 A",
            phase: "1 Phase"
        },
        {
            name: "MCB 05",
            ampere: "20 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 06",
            ampere: "32 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 07",
            ampere: "40 A",
            phase: "3 Phase"
        }
    ],


    E: [
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
        },
        {
            name: "MCB 05",
            ampere: "40 A",
            phase: "3 Phase"
        }
    ],


    F: [
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
            ampere: "16 A",
            phase: "1 Phase"
        },
        {
            name: "MCB 04",
            ampere: "20 A",
            phase: "1 Phase"
        },
        {
            name: "MCB 05",
            ampere: "20 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 06",
            ampere: "32 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 07",
            ampere: "40 A",
            phase: "3 Phase"
        },
        {
            name: "MCB 08",
            ampere: "63 A",
            phase: "3 Phase"
        }
    ]

};


// =====================================================
// TAMPILKAN DETAIL PANEL
// =====================================================

function showPanel(panel) {

    const modal = document.getElementById("panelModal");

    const panelName = document.getElementById("modalPanelName");

    const mcbCount = document.getElementById("mcbCount");

    const tableBody = document.getElementById("mcbTableBody");


    // Ambil data panel
    const data = panelData[panel];


    // Nama panel
    panelName.textContent = "PANEL " + panel;


    // Jumlah MCB
    mcbCount.textContent = data.length;


    // Kosongkan tabel
    tableBody.innerHTML = "";


    // Masukkan data MCB
    data.forEach((mcb) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${mcb.name}</td>
            <td>${mcb.ampere}</td>
            <td>${mcb.phase}</td>
        `;

        tableBody.appendChild(row);

    });


    // Tampilkan modal
    modal.classList.add("show");

}


// =====================================================
// TUTUP PANEL
// =====================================================

function closePanel() {

    const modal = document.getElementById("panelModal");

    modal.classList.remove("show");

}


// =====================================================
// KLIK DI LUAR POPUP
// =====================================================

document.getElementById("panelModal").addEventListener("click", function (event) {

    if (event.target === this) {

        closePanel();

    }

});


// =====================================================
// TOMBOL ESC
// =====================================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closePanel();

    }

});