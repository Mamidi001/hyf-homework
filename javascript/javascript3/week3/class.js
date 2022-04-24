class User {
  constructor(firstName, lastName) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
const user1 = new User("swetha", "kancharla");
const user2 = new User("Ananth", "mamidi");
console.log(user1.firstName, user1.lastName);
console.log(user2.getFullName());

const body = document.querySelector("body");
const firstNameInput = document.getElementById("firstName");
const dobInfo = document.getElementById("dob");
const button = document.querySelector("button");

class Person {
  constructor(firstName, dob) {
    this.firstName = firstName;
    this.dob = dob;
  }
  computAge() {
    return 2020 - this.dob;
  }
  renderPersonInfo() {
    const div = document.createElement("div");
    div.innerHTML = `First Name : ${this.firstName} Dob :${this.dob}`;
    body.append(div);
  }
  editPersonInfo() {}
}

button.addEventListener("click", () => {
  const person = new Person(firstNameInput.value, dobInfo.value);
  console.log(person);
  person.renderPersonInfo();
  firstNameInput.value = "";
  dobInfo.value = "";
});

class Job {
  constructor(id, title, description, startDate, endDate) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.stratDate = startDate),
      (this.endDate = endDate);
  }
}
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    (this.id = id),
      (this.title = title),
      (this.school = school),
      (this.address = address),
      (this.stratDate = startDate),
      (this.endDate = endDate);
  }
}
class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    this.jobs.pop(job);
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    this.educations.pop(education);
  }
  renderCV() {
    const jobs = document.querySelector("#jobs");
    const li = document.createElement("li");
    const myjobs = this.jobs.map((job) => job.title);
    jobs.appendChild(li);

    const educations = document.querySelector("#educations");
    const li1 = document.createElement("li");
    const myEducations = this.educations.map((education) => education.title);
    console.log(myEducations);
    li.innerHTML = myEducations;
    educations.appendChild(li1);
  }
}
const myCv = new CV("swethahimabindu@gmail.com");
const myJob1 = new Job(1, "teacher", "assistant", 2017, 2020);
const myJob2 = new Job(2, "sales", "assistant", 2017, 2020);
const myJob3 = new Job(3, "programmer", "assistant", 2017, 2020);
const myEducation1 = new Education(
  1,
  "bachelors",
  "university",
  "india",
  2000,
  2008
);
const myEducation2 = new Education(
  2,
  "hyf",
  "university",
  "denmark",
  2001,
  2004
);
const myEducation3 = new Education(
  3,
  "occational",
  "university",
  "copenhagen",
  2002,
  2006
);
myCv.addJob(myJob1);
myCv.addJob(myJob2);
myCv.addJob(myJob3);
myCv.addEducation(myEducation1);
myCv.addEducation(myEducation2);
myCv.addEducation(myEducation3);

console.log(myCv);
myCv.renderCV();
