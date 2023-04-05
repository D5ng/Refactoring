export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  #candidate;
  #medicalExam;
  #scoringGuide;
  #result;
  #healthLevel;
  #highMedicalRiskFlag;
  #certificationGrade;
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  execute() {
    this.#result = 0;
    this.#healthLevel = 0;

    this.#highMedicalRiskFlag = false;
    this.scoreSmorking();
    
    this.#certificationGrade = "regular";
    this.isLowCertification();
    // lots more code like this
    this.#result -= Math.max(this.#healthLevel - 5, 0);
    return this.#result;
  }

  scoreSmorking() {
    if (this.#medicalExam.isSmoker) {
      this.#healthLevel += 10;
      this.#highMedicalRiskFlag = true;
    }
  }

  isLowCertification(){
    if (this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)) {
      this.#certificationGrade = "low";
      this.#result -= 5;
    }
  };
}

export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
