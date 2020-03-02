import React, { Component } from 'react';
import TaskItem from './TaskItem';
import styled, { css } from 'styled-components';

const StyledButtonContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const StyledButton = styled.div`
  color: #FFFFFF;
  display: inline-block;
  background-color: #2196F3;
  border-radius: 7px;
  padding: 8px 14px;

  &:hover {
    cursor: pointer;
  }

  &:first-child {
    margin-right: 10px;
  }

  ${props => {
    if(props.id === "removeDones") {
      return css`
        background-color: #EA4C89
      `
    }
  }}
`;

// text-align: center;
const StyledTaskList = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 800px;
`;

const StyledNoTaskMessage = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 800px;

  & > div.message {
    font-size: 20px;
    font-family: Roboto-Regular;
    color: rgba(0,0,0,.4);
    text-align: center;
    user-select:none;
  }
`;

const StyledIconLink = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-family: Roboto-Regular;
  user-select:none;

  & > a {
    text-decoration: none;
    color: rgba(0,0,0,.4);

    &:active, &:visited {
      color: rgba(0,0,0,.4);
    }
    &:hover {
      color: rgba(0,0,0,.6);
      text-decoration: underline;
    }
  }

  & > a > img.icon {
    width: 216px;
    display: block;
    text-align: center;
    padding: 15px;
    padding-bottom: 0;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  & > a > div {
    text-align: center;
  }

  & > a > div > span {
    font-size: 12px;
  }
`;

class TaskList extends Component {

  static defaultProps = {
    tasks: []
  }

  handleClickCreateBtn = () => {
    const { handleCreateTask } = this.props;
    handleCreateTask({
      isDone: false,
      content: ''
    });
  }

  handleRemoveDonesBtn = () => {
    const { handleRemoveDones } = this.props;
    console.log(handleRemoveDones);
    handleRemoveDones();
  }

  render() {
    const gh_notask_icon_URL = "https://raw.githubusercontent.com/kimhyeon/doitdoittask/master/public/images/chunbae.png";
    const { tasks, handleUpdateTask, handleRemoveTask } = this.props;
    const list = tasks.map((task, index) => {
      if(index === 0 && task.content === '') {
        task.isNew = true;
      } else {
        task.isNew = false;
      }

      return (
        <TaskItem key={task.id}
          task={task}
          isNew={task.isNew}
          handleUpdateTask={handleUpdateTask}
          handleRemoveTask={handleRemoveTask}
        />
      )
    });
  


    return (
      <div>
        <StyledButtonContainer>
          <StyledButton id="addTask" onClick={this.handleClickCreateBtn}>Add New Task</StyledButton>
          <StyledButton id="removeDones" onClick={this.handleRemoveDonesBtn}>Remove Dones</StyledButton>
        </StyledButtonContainer>
        { 
          list.length > 0 ? (
            <StyledTaskList>
            {list}
            </StyledTaskList>
          ) : (
            <StyledNoTaskMessage>
              <StyledIconLink>
                <a href="https://comic.naver.com/webtoon/list.nhn?titleId=708452" target="_blank">
                  {/* <img className="icon" src="/images/chunbae.png"></img> */}
                  <img className="icon" src={gh_notask_icon_URL}></img>
                  <div>
                    <span>©️ NAVER WEBTOON CORP. of '냐한남자'</span>
                  </div>
                </a>
              </StyledIconLink>
              <div className="message">No task to display.</div>
            </StyledNoTaskMessage>
          )
        }


      </div>
    );

  };

}

export default TaskList;