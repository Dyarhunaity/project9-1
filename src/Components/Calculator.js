import React,{Component} from 'react';
import axios from 'axios';
import '../css/calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      activity: "",
      bmr: "",
      sugggestion: "",
      pal: "",
      weightType: "",
      errorDis:'none',
    };
  }
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };

  handleweightTypeChange = (event) => {
    this.setState({ weightType: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let gender = this.state.gender;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let weight = this.state.weight;
    let weightType = this.state.weightType;

    if (
      age == "" ||
      gender == "" ||
      heightFeet == "" ||
      heightInches == "" ||
      weight == ""
    ) {
      this.setState({ error: "All Fields are Required" });
      return;
    }

    let bmrCalc = "";
    let height = heightFeet  + heightInches ;
    if (weightType == 1) {
      if (gender == 2) {
        bmrCalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      } else if (gender == 1) {
        bmrCalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      }
    } else if (weightType == 2) {
      if (gender == 2) {
        bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      } else if (gender == 1) {
        bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }
    }
    this.setState({ bmr: bmrCalc });

    let activitySug = ";";
    if (bmrCalc <= 1926) {
      activitySug = "Suggestion: little or no exercise.";
    } else if (bmrCalc > 1926 && bmrCalc <= 2207) {
      activitySug = "Suggestion: Exercise 1-3 times/week.";
    } else if (bmrCalc > 2207 && bmrCalc <= 2351) {
      activitySug = "Suggestion: Exercise 4-5 times/week.";
    } else if (bmrCalc > 2351 && bmrCalc <= 2488) {
      activitySug =
        "Suggestion: Daily exercise or intense exercise 3-4 times/week.";
    } else if (bmrCalc > 2488 && bmrCalc <= 2796) {
      activitySug = "Suggestion: Intense exercise 6-7 times/week.";
    } else if (bmrCalc > 2796) {
      activitySug = "Very intense exercise daily, or physical job.";
    }
    this.setState({ sugggestion: "Suggestion: " + activitySug });

    this.setState({ error: "" });
    console.log(this.state.weight);
  }

  calculateKCalories() {
    let resultPAL;
    if (this.state.activity) {
      resultPAL = (
        this.state.bmr * this.state.activity
      );
    }
    this.setState({ pal: resultPAL });
    console.log({resultPAL});
  }
  handlePlan(){
    if(this.state.pal,this.state.heightFeet,this.state.heightInches,this.state.age,this.state.weight,this.state.gender != ''){
    sessionStorage.setItem('gender', this.state.gender);
    sessionStorage.setItem('weight', this.state.weight);
    sessionStorage.setItem('height',parseInt(this.state. heightFeet)+parseInt(this.state.heightInches));
    sessionStorage.setItem('age', this.state.age);
    sessionStorage.setItem('heightFeet', this.state.heightFeet);
    sessionStorage.setItem('heightInches', this.state.heightInches);
    sessionStorage.setItem('calories', this.state.pal);

    window.location='./Pricing';}
    else{
      this.setState({errorDis:'block'})
    }
  }
  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    let resultBMR;
    if (this.state.bmr) {
      resultBMR = <div className="resultBMR">{this.state.bmr}</div>;
    }

    let resultSug;
    if (this.state.sugggestion) {
      resultSug = <div className="resultSug">{this.state.sugggestion}</div>;
    }

    let resultPAL;
    if (this.state.pal) {
      resultPAL = <div className="resultSug">{this.state.pal}</div>;
    }

    return (
      <div id="bmrcalc">
        <div className="form">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          {error}
          <div className="inputwrap">
            <label className="label">Gender</label>
            <br></br>
            <label>
              <input
                type="radio"
                checked={this.state.gender == "1"}
                onChange={this.handlegenderChange}
                className="genderF"
                name="gender"
                value="1"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.gender == "2"}
                onChange={this.handlegenderChange}
                className="genderM"
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          <div className="inputwrap">
            <label className="label">Weight</label>
            <br></br>
            <label>
              <input
                type="radio"
                checked={this.state.weightType == "1"}
                onChange={this.handleweightTypeChange}
                className="imperial"
                name="wrightT"
                value="1"
              />
              In lbs
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.weightType == "2"}
                onChange={this.handleweightTypeChange}
                className="metric"
                name="wrightT"
                value="2"
              />
              In KG
            </label>
            <input
              type="number"
              checked={this.state.weightType == "2"}
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="weight"
              min="0"
              max="999"
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height (in meters)</label>
            <input
              type="number"
              value={this.state.heightFeet}
              onChange={this.handleheightFeetChange}
              name="heightFeet"
              className="heightFeet"
              min="0"
              max="8"
            />
            <label className="label">Height fractions (in centimeters)</label>
            <input
              type="number"
              value={this.state.heightInches}
              onChange={this.handleheightInchesChange}
              name="heightInches"
              className="heightInches"
              min="0"
              max="11"
            />
          </div>
          <div className="inputwrap">
            <label className="label">Age in years</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age"
              name="age"
              min="0"
              max="120"
            />
          </div>
          <button className='bttn' type="button" onClick={() => this.calculateBMR()}>
            Calculate BMR
          </button>
          {resultBMR}
          {resultSug}
          <div className="workout">
            <div className="inputwrap">
              <label className="label">Workout in a Week</label>
              <select
                className="activity"
                value={this.state.activity}
                onChange={this.handleactivityChange}
                name="activity"
              >
                <option value="">Select your Activity</option>
                <option value="1.2">
                  Very little or no exercise, and desk job
                </option>
                <option value="1.375">
                  Light exercise 1 to 3 days per week
                </option>
                <option value="1.55">
                  Moderate exercise 3 to 5 days per week
                </option>
                <option value="1.725">
                  Heavy exercise 6 to 7 days per week
                </option>

              </select>
            </div>
            <button className='bttn' type="button" onClick={() => this.calculateKCalories()}>
              Calculate Calories
            </button>
            <div className="resultPAL">{resultPAL}</div>
            <button className='bttn' type="button" onClick={() => this.handlePlan()}>
              Choose Your Plan
            </button>
            <p style={{color: 'red',display: this.state.errorDis}}>Please submit your information first !!!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;