import jobs from '../src/jobs.json';

export default function handler(req, res) {
  res.status(200).json(jobs);
}