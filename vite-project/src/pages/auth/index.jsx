import { useState } from "react";
import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  // State for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // State for signup
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const handleLogin = async () => {};
  const handleSignup = async () => {};

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="victory" className="w-20 h-20" />
            </div>
            <p className="font-medium text-center">
              Fill in your details to begin your journey with us!
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full flex justify-center">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-transparent text-black
                             text-opacity-90 border-b-2 rounded-none
                             w-full data-[state=active]:text-black
                             data-[state=active]:font-semibold
                             data-[state=active]:border-b-purple-500
                             p-3 transition-all duration-300"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black
                             text-opacity-90 border-b-2 rounded-none
                             w-full data-[state=active]:text-black
                             data-[state=active]:font-semibold
                             data-[state=active]:border-b-purple-500
                             p-3 transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <Button
                className="rounded-full p-6" onClick={handleLogin}
                >
                  Login
                </Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5" value="signup">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6"
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                />
                 <Button
                className="rounded-full p-6" onClick={handleSignup}
                >
                  Signup
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className = "hidden xl:flex justify-center items-center"
        >
          <img src={Background} alt="background login" className="[700px]" />
        </div>
      </div >
    </div>
  );
};

export default Auth;
