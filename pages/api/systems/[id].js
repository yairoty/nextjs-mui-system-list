import systems from '../../../data/systems.json';
import weather from '../../../data/weather.json';
import airCompressor from '../../../data/air-compressor.json';
import ambientConditions from '../../../data/ambient-conditions.json';
import compressedAir from '../../../data/compressed-air.json';
import electricityMain from '../../../data/electricity-main.json';
import energySource from '../../../data/energy-source.json';
import machine from '../../../data/machine.json';
import production from '../../../data/production.json';
import resources from '../../../data/resources.json';
import silo from '../../../data/silo.json';



const getSystemTypeData = (typeName) => {
  // mocking backend logic...
  const typeNameParsed = typeName && typeName.replace(/ /g, '');
  const dataSets = {
    'Weather': weather,
    'AirCompressor': airCompressor,
    'AmbientConditions': ambientConditions,
    'CompressedAir': compressedAir,
    'ElectricityMain': electricityMain,
    'EnergySources': energySource,
    'Machine': machine,
    'AreaProduction': production,
    'Production': production,
    'Resources': resources,
    'Silo': silo
  };

  return dataSets[typeNameParsed];
};

function flattenChildren(list) {
  let flatList = [];

  list.forEach(i => {
    if (i.children && i.children.length) {
      flatList.push(...flattenChildren(i.children));
    }

    flatList = flatList.concat(i);
  });

  return flatList;
}

export default function handler({ query: { id } }, res) {
  const systemsFlattenList = flattenChildren(systems.data);
  const filtered = systemsFlattenList.filter((systemItem) => systemItem.id === id);

  if (filtered.length > 0) {
    const targetSystem = filtered[0];
    targetSystem.type.data = getSystemTypeData(targetSystem.type.name);

    res.status(200).json(targetSystem);
  } else {
    res.status(404)
      .json({ message: `systemItem with the id of ${id} is not found` });
  }
};
