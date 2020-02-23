import fetch from 'axios'
import getConfig from 'next/config'

// import mockStores from '../../lib/amsStores'

/* 
MOCK STORES
*/
// module.exports = async (req, res) => {
//   try {
//     res.status(200).json(mockStores)
//   } catch (err) {
//     console.log('mock store error', err)
//   }
// }

const rad = 50
/* 
REAL STORE API
*/
module.exports = async (req, res) => {
  const { latlong } = req.query
  
  const stores = await fetch(
    `${process.env.STORESURL}?location=${latlong}&radius=${rad}`
  )
  
  try {
    res.status(200).json(stores.data)
  } catch (err) {
    console.log('mock store error', err)
  }
}
