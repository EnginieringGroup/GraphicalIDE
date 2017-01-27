/**
 * Created by Abc on 2017-01-16.
 */
const openDB = require('json-file-db');
const moment = require('moment');
const seqDB = require("../db-settings/sequence-generator");
const fs = require('fs');
const projectDB = openDB('./json-db/project.json');


const projectService = function () {

    const ProjectModel = {
        "id": null,
        "userId": null,
        "buttonId": null,
        "content": [],
        "name": null,
        "timestamp": null
    };
    
    
    const getProjectById = function (id) {
        let sync = true;
        let result = null;
        projectDB.get({id}, function (error, res) {
            result = res;
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };
    
    const createProject = function (newProject, userId) {
        let projectOB = Object.assign(ProjectModel,newProject);
        projectOB.id = seqDB().getSequence('projectID-seq');
        projectOB.timestamp = new Date();
        projectOB.userId = userId;
        let sync = true;
        let result = null;
        projectDB.put(projectOB, function (err) {
            console.error("create new project", projectOB, err);
            result = projectOB;
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    return {
        createProject: createProject,
        getProjectById: getProjectById
    };
};
module.exports = projectService;