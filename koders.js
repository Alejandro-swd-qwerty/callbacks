let koder = {
  isInterview: false,
  isAdvancePayment: false,
  isAttendance: false
}


// CALLBACK FUNCTION

// function interview(koder, callback) {
//   koder.isInterview = true
//   let error = null
//   if (!koder.isInterview) {
//     error = new Error('No se entrevisto')
//   }
//   callback(error, koder)
// }


// function advancePayment(koder, callback) {
//   koder.isAdvancePayment = true
//   let error = null
//   if (!koder.isAdvancePayment) {
//     error = new Error('No pudo pagar')
//   }
//   callback(error, koder)
// }


// function attendance(koder, callback) {
//   koder.isAttendance = true
//   let error = null
//   if (!koder.isAttendance) {
//     error = new Error('NO ASISTIO')
//   }
//   callback(error, koder)
// }


// function koderRegister(object) {
//   interview(object, (error, koderisInterview) => {
//     if (error) throw error
//     console.log("koderisInterview: ", koderisInterview)

//     advancePayment(koderisInterview, (error, koderIsAdvancePayment) => {
//       if (error) throw error
//       console.log("koderIsAdvancePayment", koderIsAdvancePayment),
//         attendance(koderIsAdvancePayment, (error, koderIsAttendance) => {
//           if (error) throw error
//           console.log("koderIsAttendance", koderIsAttendance)
//         })
//     })
//   })
// }

// koderRegister(koder)






// PROMISE

function interview(koder) {
  return new Promise((resolve, reject) => {
    koder.isInterview = true
    if (!koder.isInterview) {
      return reject(new Error('No se entrevisto'))
    }
    return resolve(koder)
  })
}

function advancePayment(koder) {
  return new Promise((resolve, reject) => {
    koder.isAdvancePayment = true
    if (!koder.isAdvancePayment) {
      return reject(new Error('No pudo pagar'))
    }
    return resolve(koder)
  })
}

function attendance(koder) {
  return new Promise((resolve, reject) => {
    koder.isAttendance = true
    if (!koder.isAttendance) {
      return reject(new Error('No asistio'))
    }
    return resolve(koder)
  })
}

interview(koder)
  .then(koderInterviewed => {
    advancePayment(koderInterviewed)
      .then(feePayed => {
        attendance(feePayed)
          .then(koderInClass => {
            console.log('koder joint-in', koderInClass)
          })
          .catch(error => {
            console.error('ERROR ENTREVISTA: ', error)
          })
      })
      .catch(error => {
        console.error('ERROR PAGO: ', error)
      })
  })
  .catch(error => {
    console.error('ERROR CLASE: ', error)
  })





//   /*   ASYNC/AWAIT */




//   async function main () {
//     const interviewKoder = await interview (koder)
//     const advancePayKoder = await advancePayment (interviewKoder)
//     const attendanceKoder = await attendance (advancePayKoder)
//     return attendanceKoder
// }                 

// main()
//  .then((newKoder) => { 
//     console.log('New Koder: ', newKoder)
//  })
//  .catch(error => {
//     console.log('ERROR: ', error)
//  })
