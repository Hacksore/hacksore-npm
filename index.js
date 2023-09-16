import picocolors from "picocolors";
export function greet() {
  console.log(picocolors.dim("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒	"));
  console.log("");
  console.log(picocolors.bold(picocolors.blue("👋 Hi I am")), picocolors.bold(picocolors.green("Hacksore")));

  console.log();
  console.log(
    picocolors.bold(picocolors.white("Find my socials @ https://hacksore.com")),
  );

  console.log("");
  console.log(picocolors.dim("▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒	"));
}
