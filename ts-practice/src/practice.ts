// Type Alias
type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사랑",
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];
