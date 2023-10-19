const echo = <T>(value: T): T => {
  console.log(value);

  return value;
};

echo(1);
echo("Hooi Yan");
const result = echo({});
