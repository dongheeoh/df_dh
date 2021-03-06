import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';
import axios from 'axios';
const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options); //Object.assign 병합하기 (타겟변수,값1,값2)
    
    return fetch(options.url, options)  // header url method 설정후 fetch
    .then(response =>  //받은값을 json으로 바꾸고
        response.json().then(json => {
            if(!response.ok) {  //response.ok 통신성공여부
                return Promise.reject(json);
            }
            return json; //json을 리턴해준다
        })
    );
};

export function getAllPolls(page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}








export function createPoll(pollData) {
    return request({
        url: API_BASE_URL + "/polls",
        method: 'POST',
        body: JSON.stringify(pollData)         
    });
}

export function castVote(voteData) {
    return request({
        url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
        method: 'POST',
        body: JSON.stringify(voteData)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}

//localStorage : 브라우저상의 저장소
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set."); //resolve 성공 reject 실패
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}

export function getUserCreatedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/polls?page=" + page + "&size=" + size,
        method: 'GET'
    });
}

export function getUserVotedPolls(username, page, size) {
    page = page || 0;
    size = size || POLL_LIST_SIZE;

    return request({
        url: API_BASE_URL + "/users/" + username + "/votes?page=" + page + "&size=" + size,
        method: 'GET'
    });
}


export function getUserTask() {


    return request({
        url: API_BASE_URL + "/usertask/all",
        method: 'GET'
    });
}

export function getReport(data) {
    console.log(data)
    return request({
        url: API_BASE_URL + "/report/all",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function createTask(task) {
    return request({
        url: API_BASE_URL + "/task/create",
        method: 'POST',
        body: JSON.stringify(task)         
    });
}
export function createReport(report) {
    return request({
        url: API_BASE_URL + "/report/create",
        method: 'POST',
        body: JSON.stringify(report)         
    });
}
export function getTask() {

    return request({
        url: API_BASE_URL + "/task/all",
        method: 'GET'
        
    });
}
export function getSelectTask(data) {

    return request({
        url: API_BASE_URL + "/task/select",
        method: 'POST',
        body: JSON.stringify(data)
    });
}
export function getUser() {

    return request({
        url: API_BASE_URL + "/user/all",
        method: 'GET'
        
    });
}

export function createUserTask(userTask) {
    return request({
        url: API_BASE_URL + "/usertask/create",
        method: 'POST',
        body: JSON.stringify(userTask)         
    });
}

export function deleteUserTask(userTask) {
    return request({
        url: API_BASE_URL + "/usertask/delete",
        method: 'POST',
        body: JSON.stringify(userTask)         
    });
}

export function getUserCalendar() {

    return request({
        url: API_BASE_URL+'/usertask',
        method: 'GET'
    });
}

export function getAllReport(body) {
    return request({
        url: API_BASE_URL + '/report/al',
        method: 'POST',
        body: JSON.stringify(body)    
    });
}

export function getAllTask(body) {

    return request({
        url: API_BASE_URL + "/task/all",
        method: 'POST',
        body: JSON.stringify(body)  
    });
}

export function changePassword(body) {

    return request({
        url: API_BASE_URL + "/user/changePassword",
        method: 'POST',
        body: JSON.stringify(body)  
    });
}

export function ReportConverter(body) {

    return request({
        url: API_BASE_URL + "/report/update",
        method: 'POST',
        body: JSON.stringify(body)  
    });
}

export function deleteTask(id) {

    return request({
        url: API_BASE_URL + "/task/delete?id="+id,
        method: 'GET',
    });
}

export function deleteReport(id) {

    return request({
        url: API_BASE_URL + "/report/delete?id="+id,
        method: 'GET',
    });
}
export function r(body) {
    console.log(body)
}

class Service {

  constructor() {
    console.log("Service is constructed");
  }

  getRestClient() {
    if (!this.serviceInstance) {
      this.serviceInstance = axios.create({
        baseURL: 'http://218.39.221.79:8080/api',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
          },
      });
    }

    
    return this.serviceInstance;
  }
}

export default (new Service());