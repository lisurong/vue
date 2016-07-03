module.exports = {
	{
		"name": "李素荣的作业",
		"shells": [{
			"type": "shell",
			"name": "脚本",
			"nodes": [{
				"name": "任务1",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/tomcat",
				"status": "running"
			}, {
				"name": "任务2",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/root",
				"status": "stop"
			}, {
				"name": "任务3",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/tomcat",
				"status": "running"
			}]
		}, {
			"type": "file",
			"name": "文件",
			"nodes": [{
				"name": "任务21",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/tomcat",
				"status": "running"
			}, {
				"name": "任务22",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/root",
				"status": "stop"
			}, {
				"name": "任务23",
				"account": "tomcat",
				"servers": 3,
				"dir": "/usr/tomcat",
				"status": "running"
			}]
		}]
	}
}