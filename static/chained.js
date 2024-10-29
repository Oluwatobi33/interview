

var slc1 = document.getElementById("slc1");
var slc2 = document.getElementById("slc2");
var slc3 = document.getElementById("slc3");
var slc4 = document.getElementById("slc4");
// var slc5 = document.getElementById("slc5");

var dataObj = {//is a valid json
    "Faculty of Science": {
        "Biological Sciences": {
            "Biology": {
                "100": ["GST111", "ICT112", "BIO111", "CHM111", "MTH111", "PHY111", "TMC111", "BIO112", "BOT112", "CHM112", "COS111", "PHY112", "EDP111"],
                "200": ["BIO211", "BIO212", "BIO213", "BIO214", "BIO215", "GST211", "GST212", "TMC211", "BCH211", "ZOO212", "CHM213", "MCB211", "BOT212", "ZOO211", "ICT212", "EDP211",],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Biochemisty": {
                "100": ["GST111", "BIO111", "CHM111", "MTH111", "PHY111", "YMC111", "ICT112", "CHM112", "BIO112", "PHY112", "COS111", "EDP111", "BOT112"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Biotechnology": {
                "100": ["GST111", "ICT112", "BIO111", "CHM111", "MTH111", "PHY111", "TMC111", "BIO112", "BOT112", "CHM112", "COS111", "PHY112", "EDP111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Microbiology": {
                "100": ["GST111", "ICT112", "BIO111", "CHM111", "MTH111", "PHY111", "TMC111", "BIO112", "BOT112", "CHM112", "COS111", "PHY112", "EDP111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Chemical Sciences": {
            "Chemistry": {
                "100": ["BIO111", "GST111", "CHM111", "MTH111", "PHY111", "TMC111", "ICT112", "EDP111", "PHY112"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Industrial Chemistry": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Mathematical Sciences": {
            "Mathematics": {
                "100": ["GST111", "MTH111", "MTH112", "PHY111", "CHM111", "TMC111", "CHM112", "COS111", "EDP111", "PHY112", "ICT111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Computing": {
            "Computer Science": {
                "100": ["GST111", "MTH111", "MTH112", "PHY113", "PHY111", "CHM111", "TMC111", "CHM112", "COS111", "EDP111", "ICT111", "PHY112"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Information Technology": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Earth Sciences": {
            "Geology": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Applied Geophysics": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Physics": {
            "Physics": {
                "100": ["GST111", "CHM111", "MTH111", "MTH112", "PHY111", "PHY113", "TMC111", "BIO111", "CHM112", "COS111", "EDP111", "ICT111", "PHY112"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Physics with ELectronics": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },

    },
    "Faculty of Humanities": {
        "Languages and Linguistics": {
            "English Language": {
                "100": ["GST111", "ENG111", "ENG112", "ENG113", "YMC111", "LIT114", "EDP111", "HIS114", "ICT112", "LIT115", "LIT116", "CMS111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "French": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "History and International Studies": {
            "History and International Studies": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        }
    },

    "Faculty of Social and Management Sciences": {
        "Accounting": {
            "Accounting": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "Finance": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Business Administration": {
            "Business Administration": {
                "100": ["GST111", "ACC111", "ECO111", "POL111", "TMC111", "BUA111", "AMS111", "AMS113", "BUA114", "BUA115", "BUA116", "EDP111", "ICT112"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Economics": {
            "Economics": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Political Science & International Relations": {
            "Political Science": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
            "International Relations": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        }
    },
    "Faculty of Basic Medicals": {
        "Nursing": {
            "Nursing": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Anatomy": {
            "Anatomy": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
        "Public Health": {
            "Public Health": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
    },
    "Faculty of Environmental Sciences": {
        "Architecture": {
            "Architecture": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
    },
    "Faculty of Law": {
        "Law": {
            "Law": {
                "100": ["BIO111"],
                "200": ["BIO211"],
                "300": ["BIO311"],
                "400": ["BIO411"],
            },
        },
    },
    "Faculty of Education": {
        "Science": ["Computer", "Physics", "Chemistry", "Biology"],
        "Management": ["Business Administration", "Accounting"]
    },
    "Postgraduate School": {
        "Business Admin": {
            "PGD": ["BIO111"],
            "MSc": ["BIO211"],
            "MBA": ["BIO211"],
            "PhD": ["BIO311"],
        },
        "Computing": {
            "PGD": ["BIO111"],
            "MSc": ["BIO211"],
            "PhD": ["BIO311"],
        },
        "Microbiology": {
            "PGD": ["BIO111"],
            "MSc": ["BIO211"],
            "PhD": ["BIO311"],
        }
    }
}



let ctrs = Object.keys(dataObj);
cmo(ctrs, slc1);
_1sel();
//slc1.value = "usa"
//slc1.dispatchEvent(new Event('change'));

function _1sel() {
    slc2.innerHTML = "";
    // let cities = Object.keys(dataObj[slc1.value]);
    let faculty = Object.keys(dataObj[slc1.value]);
    cmo(faculty, slc2);
    _2sel();
}

function _2sel() {
    slc3.innerHTML = "";
    let department = Object.keys(dataObj[slc1.value][slc2.value]);
    cmo(department, slc3);
    _3sel();
}

function _3sel() {
    slc4.innerHTML = "";
    let program = Object.keys(dataObj[slc1.value][slc2.value][slc3.value]);
    cmo(program, slc4);
}

function _4sel() {
    slc5.innerHTML = "";
    let level = dataObj[slc1.value][slc2.value][slc3.value][slc4.value];
    cmo(level, slc5);
}

function cmo(arr, s) {//create mult opt
    arr.forEach(o => {
        let opt = document.createElement("option");
        opt.value = o;
        opt.innerHTML = o;
        s.add(opt);
    });
}



//sorting



//   @param {HTMLTableElement} table The table to sort
//   @param {number} column The index of the column to sort
//   @param {boolean} asc Determines if the sorting will be in ascending

// function sortTableByColumn(table, column, asc = true) {
// 	const dirModifier = asc ? 1 : -1;
// 	const tBody = table.tBodies[0];
// 	const rows = Array.from(tBody.querySelectorAll("tr"));

// 	// Sort each row
// 	const sortedRows = rows.sort((a, b) => {
// 		const aColText = a.querySelector(td:nth-child(${column + 1})).textContent.trim();
// 		const bColText = b.querySelector(td:nth-child(${column + 1})).textContent.trim();

// 		return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
// 	});

// 	// Remove all existing TRs from the table
// 	while (tBody.firstChild) {
// 		tBody.removeChild(tBody.firstChild);
// 	}

// 	// Re-add the newly sorted rows
// 	tBody.append(...sortedRows);

// 	// Remember how the column is currently sorted
// 	table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
// 	table.querySelector(th:nth-child(${column + 1})).classList.toggle("th-sort-asc", asc);
// 	table.querySelector(th:nth-child(${column + 1})).classList.toggle("th-sort-desc", !asc);
// }

// document.querySelectorAll(".table-sortable th").forEach(headerCell => {
// 	headerCell.addEventListener("click", () => {
// 		const tableElement = headerCell.parentElement.parentElement.parentElement;
// 		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
// 		const currentIsAscending = headerCell.classList.contains("th-sort-asc");

// 		sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
// 	});
// });
