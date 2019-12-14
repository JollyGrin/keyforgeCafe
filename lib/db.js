import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyBj1QK7piMXmdoF'
});

const base = Airtable.base('appuxyROrm9vUAbRD');

async function getResults() {
  let results = [];

  await base('Matches')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 5,
      view: 'Grid view'
    })
    .firstPage((err, records) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log(records);
      // results.push(records);
      results = records;
    });

  debugger;
  return results;
}

export { getResults };
