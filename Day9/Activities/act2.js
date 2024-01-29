class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Defendant extends Person {
    constructor(name, age, legalCase) {
      super(name, age);
      this.legalCase = legalCase;
    }
  }
  
  class Prosecutor extends Person {
    constructor(name, age) {
      super(name, age);
    }
  }
  
  class TrialCourt {
    initialTrial(prosecutor, defendant) {
      // Initial trial
      console.log(`Name: ${defendant.name}\nAge: ${defendant.age}yrs old\nCase Title: ${defendant.legalCase.title}\nFiled by: ${prosecutor.name}`);
    }
  
    getVerdict(defendant) {
      // Get verdict
      if (defendant.age < 18) {
        return "Not Guilty (Defendant is below 18 years old).";
      } else {
        return "Guilty";
      }
    }
  }
  
  class Case {
    constructor(title, years, months, days, minAge, maxAge) {
      this.title = title;
      this.imprisonmentTerm = { years, months, days };
      this.ageLimit = { min: minAge, max: maxAge };
    }
  
    computeReleaseDate(currentDate) {
      // Compute release date
      const releaseDate = new Date(currentDate);
      releaseDate.setFullYear(releaseDate.getFullYear() + this.imprisonmentTerm.years);
      releaseDate.setMonth(releaseDate.getMonth() + this.imprisonmentTerm.months);
      releaseDate.setDate(releaseDate.getDate() + this.imprisonmentTerm.days);
      return releaseDate;
    }
  }
  
  
  // Instance
  const legalCase = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
  const prosecutor = new Prosecutor("John", 30);
  const defendant = new Defendant("Onel", 15, legalCase);
  const trialCourt = new TrialCourt();
  
  // Start trial
  trialCourt.initialTrial(prosecutor, defendant);
  
  // Get the verdict w/ date of release
  const verdict = trialCourt.getVerdict(defendant);
  console.log(`Verdict: ${verdict}`);
  if (verdict === "Guilty") {
    const releaseDate = legalCase.computeReleaseDate(new Date());
    console.log(`Release Date: ${releaseDate.toDateString()}`);
}
  