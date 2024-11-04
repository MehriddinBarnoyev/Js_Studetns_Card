const students = [
  {
    name: "MOXIRBEK ABDUMALIKOV MUZAFFAR O‘G‘LI",
    username: "moxirbek_a",
    password: "pass1234",
    email: "moxirbek_a@mail.com",
    age: 20,
    grade: "A",
    major: "Computer Science",
  },
  {
    name: "HUMOYUN ABDUQODIROV G‘AYRAT O‘G‘LI",
    username: "humoyun_q",
    password: "humoyun789",
    email: "humoyun_q@mail.com",
    age: 22,
    grade: "B",
    major: "Mathematics",
  },
  {
    name: "AZIZJON ALIQULOV IKROMJON O‘G‘LI",
    username: "azizjon_i",
    password: "azizsecure",
    email: "azizjon_i@mail.com",
    age: 21,
    grade: "A-",
    major: "Physics",
  },
  {
    name: "ZAFAR IBROHIMOV IKROM O‘G‘LI",
    username: "zafar_i",
    password: "zafar2024",
    email: "zafar_i@mail.com",
    age: 23,
    grade: "B+",
    major: "Chemistry",
  },
  {
    name: "MIRKOMIL MIRXOMIDOV ILXOM O‘G‘LI",
    username: "mirkomil_m",
    password: "mirkomil!56",
    email: "mirkomil_m@mail.com",
    age: 22,
    grade: "A",
    major: "Engineering",
  },
  {
    name: "OYATILLO OBLOBERDIYEV OYBEK O‘G‘LI",
    username: "oyatillo_o",
    password: "oyatillo#789",
    email: "oyatillo_o@mail.com",
    age: 20,
    grade: "B-",
    major: "Economics",
  },
  {
    name: "IBROHIM QAXROMONOV MUROD O‘G‘LI",
    username: "ibrohim_q",
    password: "ibrohimpass",
    email: "ibrohim_q@mail.com",
    age: 21,
    grade: "C+",
    major: "History",
  },
  {
    name: "JAHONGIR XALIMJONOV QAXRAMON O‘G‘LI",
    username: "jahongir_x",
    password: "jahon!45",
    email: "jahongir_x@mail.com",
    age: 23,
    grade: "A-",
    major: "Linguistics",
  },
  {
    name: "AZAMAT SA’DULLAYEV KAHRAMON O‘G‘LI",
    username: "azamat_s",
    password: "azamat!93",
    email: "azamat_s@mail.com",
    age: 20,
    grade: "B",
    major: "Business",
  },
  {
    name: "FAZLIDDIN USMONOV AXLIDDIN O‘G‘LI",
    username: "fazliddin_u",
    password: "fazliddin12",
    email: "fazliddin_u@mail.com",
    age: 21,
    grade: "A",
    major: "Psychology",
  },
  {
    name: "SHAXZODBEK SHAVKATOV SHUXRATBEK O‘G‘LI",
    username: "shaxzodbek_s",
    password: "shaxzod123",
    email: "shaxzodbek_s@mail.com",
    age: 22,
    grade: "B+",
    major: "Literature",
  },
  {
    name: "ABDURASHID ABDURAXMONOV RAVSHAN O‘G‘LI",
    username: "abdurashid_a",
    password: "abdurashid!78",
    email: "abdurashid_a@mail.com",
    age: 23,
    grade: "A-",
    major: "Philosophy",
  },
  {
    name: "SHAXZODBEK SODIQJONOV SHOYATBEK O‘G‘LI",
    username: "shaxzodbek_s2",
    password: "shaxzod!67",
    email: "shaxzodbek_s2@mail.com",
    age: 21,
    grade: "C",
    major: "Political Science",
  },
  {
    name: "ISLOMBEK KAMOLIDDINOV SAYFIDDIN O‘G‘LI",
    username: "islombek_k",
    password: "islombek!89",
    email: "islombek_k@mail.com",
    age: 20,
    grade: "A",
    major: "Geography",
  },
  {
    name: "OZODBEK NEMATOV BOTIRALIJONOVICH",
    username: "ozodbek_n",
    password: "ozodbekpass",
    email: "ozodbek_n@mail.com",
    age: 23,
    grade: "B",
    major: "Biology",
  },
  {
    name: "RUSLAN TODJIDINOV RUKNIDDIN O‘G‘LI",
    username: "ruslan_t",
    password: "ruslan2024",
    email: "ruslan_t@mail.com",
    age: 24,
    grade: "B+",
    major: "Chemistry",
  },
  {
    name: "TOHIRJON YUSUPOV BOTIRALI O‘G‘LI",
    username: "tohirjon_y",
    password: "tohirpass",
    email: "tohirjon_y@mail.com",
    age: 22,
    grade: "A",
    major: "Physics",
  },
  {
    name: "MEHRIDDIN BARNAYEV SHONAZAR O‘G‘LI",
    username: "mehriddin_b",
    password: "5633",
    email: "mehriddin_b@mail.com",
    age: 21,
    grade: "C+",
    major: "Law",
  },
  {
    name: "UMIDJON HAMIDJONOV ZARIFJONOVICH",
    username: "umidjon_h",
    password: "umid2024",
    email: "umidjon_h@mail.com",
    age: 23,
    grade: "B-",
    major: "Statistics",
  },
  {
    name: "AXMADBEK USMANOV ANVAR O‘G‘LI",
    username: "axmadbek_u",
    password: "axmad!pass",
    email: "axmadbek_u@mail.com",
    age: 20,
    grade: "A",
    major: "Computer Engineering",
  },
  {
    name: "SAID ORIFOV ODIL O‘G‘LI",
    username: "said_o",

    password: "said2023",
    email: "said_o@mail.com",
    age: 21,
    grade: "B",
    major: "Marketing",
  },
  {
    name: "SHOHAKBAR ANVARJONOV",
    username: "shoakbar_a",
    password: "shoakbar!pass",
    email: "shoakbar_a@mail.com",
    age: 22,
    grade: "C",
    major: "Accounting",
  },
  {
    name: "SARDOR ERKINOV DILSHOD O‘G‘LI",
    username: "sardor_e",
    password: "sardorpass",
    email: "sardor_e@mail.com",
    age: 20,
    grade: "B+",
    major: "Management",
  },
  {
    name: "SHOXRUZBEK ABDURAXMONOV AZIZBEK O‘G‘LI",
    username: "shoxruzbek_a",
    password: "shoxruz!pass",
    email: "shoxruzbek_a@mail.com",
    age: 21,
    grade: "A",
    major: "Architecture",
  },
];

function createStudentCard(student) {
  return `
        <div class="col">
            <div class="card h-100 ">
                <div class="card-header d-flex justify-content-between align-items-center">
                    ${student.name}
                    <span class="badge bg-secondary major-badge">${student.major}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Grade: ${student.grade}</h5>
                    <p class="card-text">Student Name: ${student.name}</p>
                    <p class="card-text">Student username: ${student.username}</p>
                    <p class="card-text">Student email: ${student.email}</p>
                    <p class="card-text">Student age: ${student.age}</p>
                    <button class="btn btn-outline-danger" onClick="deleteStudent('${student.username}')">Delete</button>
                </div>
            </div>
        </div>
    `;
}

function deleteStudent(username) {
  const studentIndex = students.findIndex(
    (student) => student.username === username
  );
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    renderStudentCards(students);
  }
}

function renderStudentCards(studentsToRender) {
  const studentCardsContainer = document.getElementById("studentCards");
  studentCardsContainer.innerHTML = studentsToRender
    .map(createStudentCard)
    .join("");
}
renderStudentCards(students);


function filterStudents() {
  const selectedMajor = document.getElementById("majorFilter").value;
  const filteredStudents = selectedMajor
    ? students.filter((student) => student.major === selectedMajor)
    : students;
  renderStudentCards(filteredStudents);
}

// Search function
const searchStudent = () => {
  const search = document.getElementById("search");
  const searchValue = search.value.toLowerCase();
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchValue) ||
      student.username.toLowerCase().includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue) ||
      student.major.toLowerCase().includes(searchValue)
  );
  renderStudentCards(filteredStudents);
};

let isFilteradByAge = true;
const typeSort = document.getElementById("typeSort");


const filterStudetns = () => {
  
  if (isFilteradByAge) {
    students.sort((studentA, studentB) => studentA.age - studentB.age);
    typeSort.innerHTML = ": Ascending";
  } else {
    students.sort((studentA, studentB) => studentB.age - studentA.age);
    typeSort.innerHTML = ": Descending";
  }
  renderStudentCards(students);
  isFilteradByAge = !isFilteradByAge;
};

document.getElementById("majorFilter").addEventListener("change", filterStudents);
document.getElementById("search").addEventListener("input", searchStudent);

