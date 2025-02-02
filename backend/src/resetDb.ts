import { db } from "../src/db";
import { Food } from "../src/entities/Food";

async function cleadDb() {
  const runner = db.createQueryRunner();
  await Promise.all(
    db.entityMetadatas.map(async (entity: { tableName: any }) =>
      runner.query(`DROP TABLE IF EXISTS ${entity.tableName}`)
    )
  );
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await cleadDb();

  const france = Food.create({
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
  });
  const china = Food.create({
    name: "China",
    code: "CN",
    emoji: "🇨🇳",
  });
  const canada = Food.create({
    name: "Canada",
    code: "CA",
    emoji: "🇨🇦",
  });
  const aus = Food.create({
    name: "Australia",
    code: "AU",
    emoji: "🇦🇺",
  });
  const kenya = Food.create({
    name: "Kenya",
    code: "KE",
    emoji: "🇰🇪",
  });
  const brazil = Food.create({
    name: "Brazil",
    code: "BR",
    emoji: "🇧🇷",
  });

  await france.save();
  await china.save();
  await canada.save();
  await aus.save();
  await kenya.save();
  await brazil.save();

  console.log("done !");
}

main();
