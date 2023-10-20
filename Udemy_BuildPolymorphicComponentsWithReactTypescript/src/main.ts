const echo = <T>(value: T): T => {
  console.log(value);

  return value;
};

echo(1);
echo("Hooi Yan");
const result = echo({});

const echoLength = <T extends { length: number }>(value: T): number => {
  console.log(value.length);

  return value.length;
};

echoLength("string");
echoLength(["aaa"]);
echoLength(4);
