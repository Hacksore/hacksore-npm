import picocolors from "picocolors"
export function greet() {
  const me = picocolors.bold(picocolors.blue("👋 Hi I am Hacksore"))
  console.log(me);
  const site = picocolors.bold(picocolors.white("find more here: https://hacksore.com"));
  console.log(site);
}

