import configureMeasurements, { allMeasures } from "convert-units";
import { allUnits, unitSets, Unit } from "./constants";

export const getUnitSet = (unit: Unit | ""): Unit[] | null => {
  for (let unitSet of unitSets) {
    if (unit && unitSet.includes(unit)) {
      return unitSet;
    }
  }
  return null;
};

export const isValidUnit = (unit: Unit): boolean => {
  return allUnits.includes(unit);
};

export const convert = (number: number) =>
  configureMeasurements(allMeasures)(Number(number) || undefined);
