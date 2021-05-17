import systems from '../../../data/systems.json';

export default function handler(req, res) {
  res.status(200).json(systems.data);
};
