// Get filter type form user
const filter_type = prompt(`
How do you want to search?
------------------
🔸 ID
🔸 Name
🔸 Age
🔸 Location
🔸 Blood Group
🔸 Phone number
`)
  .toLowerCase()
  .trim();

if (filter_type === "id") {
  // get data form user
  const filter_key = prompt("Enter the id: ");
  // find donor based on id
  const donor = members.find((donor) => parseInt(donor.id) === parseInt(filter_key));
  if (donor) {
    // function call
    donate_day(donor.last_donate_date);
    // available or not checking
    if (diffInDays > 120) {
      donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
    } else {
      donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
    }
    // output
    console.log(`
    Match donors
    --------------------------
    Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
    Is Available for donate: ${donor.status}
    `);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
     Patient ${patient.id} 
     Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
      `);
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} )  id number`);
  }
} else if (filter_type === "name") {
  // get data form user
  const filter_key = prompt("Enter the donor name: ").toLowerCase();
  // Filter donors based on name
  const donors = members.filter((patient) => patient.name.toLowerCase() === filter_key.trim());

  if (donors.length > 0) {
    console.log(`
    Match donors
    --------------------------`);
    donors.map((donor) => {
      // function call
      donate_day(donor.last_donate_date);
      // available or not checking
      if (diffInDays > 120) {
        donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
      } else {
        donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
      }
      // output
      console.log(`
    Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
    Is Available for donate: ${donor.status}
    `);
      // donation history
      donor.donation_history.map((patient) => {
        console.log(` 
        Patient ${patient.id} 
        Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
        `);
      });
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} ) donor name`);
  }
} else if (filter_type === "age") {
  // get data form user
  const filter_key = prompt("Enter the donor age: ");
  // Filter donors based on age
  const donors = members.filter((patient) => parseInt(patient.age) === parseInt(filter_key));
  if (donors.length > 0) {
    console.log(`
    Match donors
    --------------------------`);
    donors.map((donor) => {
      // function call
      donate_day(donor.last_donate_date);
      // available or not checking
      if (diffInDays > 120) {
        donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
      } else {
        donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
      }
      // output
      console.log(`
      Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
      Is Available for donate: ${donor.status}
      `);
      // donation history
      donor.donation_history.map((patient) => {
        console.log(` 
      Patient ${patient.id} 
      Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
        `);
      });
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} ) age`);
  }
} else if (filter_type === "location") {
  // get data form user
  const filter_key = prompt("Enter the donor location: ").toLowerCase().trim();
  // Filter donors based on location
  const donors = members.filter((donor) => donor.location.toLowerCase() === filter_key);

  if (donors.length > 0) {
    console.log(`
    Match donors
    --------------------------`);
    donors.map((donor) => {
      // function call
      donate_day(donor.last_donate_date);
      // available or not checking
      if (diffInDays > 120) {
        donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
      } else {
        donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
      }
      // output
      console.log(`
      Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
      Is Available for donate: ${donor.status}
      `);
      // donation history
      donor.donation_history.map((patient) => {
        console.log(` 
        Patient ${patient.id} 
        Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
        `);
      });
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} ) location `);
  }
} else if (filter_type === "blood group") {
  // get data form user
  const filter_key = prompt("Enter the donor blood group: ").toLowerCase().trim();
  // Filter donors based on blood group
  const donors = members.filter((donor) => donor.blood_group.toLowerCase() === filter_key);
  if (donors.length > 0) {
    console.log(`
    Match donors
    --------------------------`);
    donors.map((donor) => {
      // function call
      donate_day(donor.last_donate_date);
      // available or not checking
      if (diffInDays > 120) {
        donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
      } else {
        donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
      }
      // output
      console.log(`
      Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
      Is Available for donate: ${donor.status}
      `);
      // donation history
      donor.donation_history.map((patient) => {
        console.log(` 
        Patient ${patient.id} 
        Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
        `);
      });
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} ) blood group `);
  }
} else if (filter_type === "phone number") {
  // get data form user
  const filter_key = prompt("Enter the donor phone number: ");
  // find donors based on phone number
  const donor = members.find((donor) => donor.phone_number === filter_key.trim());
  console.log(`
  Match donors
  --------------------------`);

  if (donor) {
    // function call
    donate_day(donor.last_donate_date);
    // available or not checking
    if (diffInDays > 120) {
      donor.status = `Yes, available for more than ${diffInDays} days. 🟢`;
    } else {
      donor.status = `No, wait for ${120 - diffInDays} days 🔴`;
    }
    // output
    console.log(`
    Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number} Location: ${donor.location} 
    Is Available for donate: ${donor.status}
    `);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
      Patient ${patient.id} 
      Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
      `);
    });
  } else {
    console.log(`❌ No donors found with the ( ${filter_key} ) phone number `);
  }
} else {
  console.log(`
  Select a valid search type: 
  ------------------------
  🔸 ID
  🔸 Name
  🔸 Age
  🔸 Location
  🔸 Blood Group
  🔸 Phone number
  
  `);
}

// console.log(typeof filter_type);
