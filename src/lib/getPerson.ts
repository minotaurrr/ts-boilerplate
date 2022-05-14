export const getPerson = (name: string, age: number) => {
  const person: Person = {
    name,
    age,
    description: `${name} is ${age} years old`,
  };

  return person;
};
