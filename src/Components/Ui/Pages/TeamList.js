import React from "react";

import TeamItem from "./TeamItem";

const TeamList = (props) => {
  return (
    <div>
      <h6 className="text-center display-5">This is Team List Section</h6>
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6 p-5 " >
            <TeamItem
              teamImg={props.teams[0].teamImg}
              teamName={props.teams[0].teamName}
              teamTag={props.teams[0].teamTag}
            />
          </div>
          <div className="col-md-6 p-5">
            <TeamItem
              teamImg={props.teams[1].teamImg}
              teamName={props.teams[1].teamName}
              teamTag={props.teams[1].teamTag}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 px-3 my-3 ">
            <TeamItem
              teamImg={props.teams[2].teamImg}
              teamName={props.teams[2].teamName}
              teamTag={props.teams[2].teamTag}
            />
          </div>
          <div className="col-md-3 px-3 my-3">
            <TeamItem
              teamImg={props.teams[3].teamImg}
              teamName={props.teams[3].teamName}
              teamTag={props.teams[3].teamTag}
            />
          </div>
          <div className="col-md-3 px-3 my-3">
            <TeamItem
              teamImg={props.teams[4].teamImg}
              teamName={props.teams[4].teamName}
              teamTag={props.teams[4].teamTag}
            />
          </div>
          <div className="col-md-3 px-3 my-3">
            <TeamItem
              teamImg={props.teams[5].teamImg}
              teamName={props.teams[5].teamName}
              teamTag={props.teams[5].teamTag}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
