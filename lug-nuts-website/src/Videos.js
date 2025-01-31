import React from 'react';

function Videos() {
  return (
    <div className="min-h-screen bg-gruvboxGreen text-gruvboxFg flex flex-col items-center justify-center px-8 py-12">
      <h2 className="text-4xl font-bold mt-20 mb-8">Linux Video Tutorials</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl mb-4">Intro to Linux</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sWbUDq4S6Y8?si=m4dbNt88fM8luS7L" title="Intro to Linux" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div>
          <h3 className="text-xl mb-4">Linux Terminal Commands</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZtqBQ68cfJc?si=7rxDmZzhV_PcBJ9m" title="Linux Terminal Commands" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div>
          <h3 className="text-xl mb-4">Bash Scripting for Beginners</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hwrnmQumtPw" title="Bash Scripting" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div>
          <h3 className="text-xl mb-4">Setting Up a Linux Server</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hzpN-JhBJBQ?si=xIwxNX_tefwZIsSY" title="Linux Server Setup" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
