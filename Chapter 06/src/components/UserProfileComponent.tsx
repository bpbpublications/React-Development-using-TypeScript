const UserProfileContainer = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const UserProfileComponent: React.FC<{ user: UserProfile | undefined }> = ({
  user
}) => {
  return (
    <UserProfileContainer>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Country:</strong> {user.country}
          </p>
          <h2>Investment Information</h2>
          <p>
            <strong>Total Invested Amount:</strong> $
            {user.totalInvestedAmount.toFixed(2)}
          </p>
          <p>
            <strong>Total Return Amount:</strong> $
            {user.totalReturnAmount.toFixed(2)}
          </p>
          <p>
            <strong>Total Profit Percentage:</strong>{" "}
            {user.totalProfitPercentage}%
          </p>
        </>
      ) : (
        <p>Loading user profile...</p>
      )}
    </UserProfileContainer>
  );
};
