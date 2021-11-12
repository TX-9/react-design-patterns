import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";

const UserInfoWithLoader = withUser(UserInfo, '123');

function App() {
  return (
    <UserInfoForm />
  );
}

export default App;
