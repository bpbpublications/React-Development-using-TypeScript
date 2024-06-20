import React, { useState, useMemo } from "react";
import styled from "styled-components";

interface Workout {
  id: number;
  type: string;
  duration: number;
  caloriesBurned: number;
}

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const WorkoutForm = styled.form`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #3498db;
    border: none;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const FitnessTrackingDashboard: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    { id: 1, type: "Running", duration: 30, caloriesBurned: 300 },
    { id: 2, type: "Cycling", duration: 45, caloriesBurned: 500 }
  ]);

  const [newWorkout, setNewWorkout] = useState<Workout>({
    id: 0,
    type: "",
    duration: 0,
    caloriesBurned: 0
  });

  const totalCaloriesBurned = useMemo(() => {
    return workouts.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    );
  }, [workouts]);

  const totalDuration = useMemo(() => {
    return workouts.reduce((total, workout) => total + workout.duration, 0);
  }, [workouts]);

  const addWorkout = () => {
    const newWorkoutWithId: Workout = {
      ...newWorkout,
      id: workouts.length + 1
    };
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkoutWithId]);
    setNewWorkout({
      id: 0,
      type: "",
      duration: 0,
      caloriesBurned: 0
    });
  };

  return (
    <DashboardContainer>
      <h1>Fitness Tracking Dashboard - useMemo</h1>
      <WorkoutForm>
        <h3>Total Calories Burned: {totalCaloriesBurned}</h3>
        <h3>Total Duration: {totalDuration} minutes</h3>
        <>
          <h4>Add Custom Workout</h4>
          <input
            type="text"
            placeholder="Workout Type"
            value={newWorkout.type}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, type: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            value={newWorkout.duration}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, duration: +e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Calories Burned"
            value={newWorkout.caloriesBurned}
            onChange={(e) =>
              setNewWorkout({ ...newWorkout, caloriesBurned: +e.target.value })
            }
          />
          <button type="button" onClick={addWorkout}>
            Add Workout
          </button>
        </>
        <>
          {workouts.map((workout) => (
            <div key={workout.id}>
              <h3>Workout: {workout.type}</h3>
              <p>Duration: {workout.duration} minutes</p>
              <p>Calories Burned: {workout.caloriesBurned}</p>
              <hr />
            </div>
          ))}
        </>
      </WorkoutForm>
    </DashboardContainer>
  );
};

export default FitnessTrackingDashboard;
