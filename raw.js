module.exports = `\
{"code":0,"msg":"ok","data":{"a":123,"debug":{},"items":[],"total":0},"debug":\
{"__meta":{"id":"Xec74047bf08259a3a1fc5a57890d74b1","datetim\
e":"2019-01-07 01:07:01","utime":1546794421.280613,"method":"\
GET","uri":"\/api\/dev\/notifications?isRead=false","ip":"10.\
255.0.2"},"php":{"version":"7.2.3","interface":"fpm-fcgi"},"me\
ssages":{"count":0,"messages":[]},"time":{"start":1546794421.\
261107,"end":1546794421.280636,"duration":0.019529104232788086\
,"duration_str":"19.53ms","measures":[{"label":"Application","\
start":1546794421.264713,"relative_start":0.003606081008911133,\
"end":1546794421.280639,"relative_end":2.86102294921875e-6,"dur\
ation":0.015925884246826172,"duration_str":"15.93ms","params":\
[],"collector":null}]},"memory":{"peak_usage":3012384,"peak_usa\
ge_str":"2.87MB"},"exceptions":{"count":0,"exceptions":[]},"view\
s":{"nb_templates":0,"templates":[]},"queries":{"nb_statements":2\
,"nb_failed_statements":0,"accumulated_duration":0.00874,"accu\
mulated_duration_str":"8.74ms","statements":[{"sql":"select exi\
sts(select * from \`user_relation\` where (\`account_id\` = '39d7b8d\
2-a86f-33e3-c89f-4db8d01b940a' and \`user_id\` = '39e57214-75ac-dfb\
8-c669-5ecb064eed15')) as \`exists\`","type":"query","params":[],"bi\
ndings":["39d7b8d2-a86f-33e3-c89f-4db8d01b940a","39e57214-75ac-dfb8\
-c669-5ecb064eed15"],"hints":[],"backtrace":[{"index":2,"namespace":\
null,"name":"\/vendor\/illuminate\/events\/Dispatcher.php","line":\
360},{"index":3,"namespace":null,"name":"\/vendor\/illu\
minate\/events\/Dispatcher.php","line":209},{"index":4,"\
namespace":null,"name":"\/vendor\/illuminate\/database\/C\
onnection.php","line":825},{"index":5,"namespace":null,"na\
me":"\/vendor\/illuminate\/database\/Connection.php","line\
":682},{"index":6,"namespace":null,"name":"\/vendor\/illum\
inate\/database\/Connection.php","line":635},{"index":7,"na\
mespace":null,"name":"\/vendor\/illuminate\/database\/Conne\
ction.php","line":333},{"index":8,"namespace":null,"name":\
"\/vendor\/illuminate\/database\/Query\/Builder.php","line"\
:2081},{"index":9,"namespace":null,"name":"\/app\/Dao\/Base\
Dao.php","line":119},{"index":10,"namespace":null,"name":"\/\
app\/Services\/AccountService.php","line":145},{"index":11,"\
namespace":null,"name":"\/app\/Http\/Middleware\/DevAuthenti\
cate.php","line":81},{"index":12,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":15,"namespace":null,"name":"\/app\/Http\/Middleware\/Log.php","line":37},{"index":16,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":19,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":102},{"index":20,"nam\
espace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":410},{"index":21,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":256},{"index":22,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":160},{"index":25,"namespace":null,"name":"\/app\/Http\/Middleware\/DebugResponse.php","line":19},{"index":26,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":30,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":33,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline\
.php","line":102},{"index":34,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":410},{"index":35,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":166},{"index":36,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":107},{"index":37,"namespace":null,"name":"\/public\/index.php","line":35}],"duration":0.0070999999999999995,"duration_str":"7.1ms","stmt_id":"\/vendor\/illuminate\/events\/Dispatcher.php:360","connection":"paas_test"},{"sql":"select count(*) as aggregate\
 from \`notification\` where (\`owner\` = '39e57214-75ac-dfb8-c669-5ecb064eed15' and \`dev_account\` = '39d7b8d2-a86f-33e3-c89\
f-4db8d01b940a') and (\`is_read\` = 'false')","type":"quer\
y","params":[],"bindings":["39e57214-75ac-dfb8-c669-5ecb064eed15","39d7b8d2-a86f-33e3-c89f-4db8d01b940a","false"],"hints":[],"backtrace":[{"index":2,"namespace":null,"name":"\/vendor\/illuminate\/events\/Dispatcher.php","line":360},{"index":3,"namespace":null,"name":"\/vendor\/illuminate\/events\/Dispatcher.php","line":209},{"index":4,"namespace":null,"name":"\/vendor\/illuminate\/database\/Connection.php","line":825},{"index":5,"namespace":null,"name":"\/vendor\/illuminate\/database\/Connection.php","line":682},{"index":6,"namespace":null,"name":"\/vendor\/illuminate\/database\/Connection.php","line":635},{"index":7,"namespace":null,"name":"\/vendor\/illuminate\/database\/Connection.php","line":333},{"index":8,"namespace":null,"name":"\/vendor\/illuminate\/dat\
abase\/Query\/Builder.php","line":1854},{"index":9,"namespace":null,"name":"\/vendor\/illuminate\/database\/Query\/Builder.php","line":1839},{"index":10,"namespace":null,"name":"\/vendor\/illuminate\/database\/Query\/Builder.php","line":1939},{"index":11,"namespace":null,"name":"\/vendor\/illuminate\/database\/Qu\
ery\/Builder.php","line":1912},{"index":12,"namespace":null,"name":"\/vendor\/illuminate\/database\/Eloquent\/Builder.php","line":712},{"index":13,"namespace":null,"name":"\/app\/Services\/Dev\/NotificationService.php","line":38},{"index":14,"namespace":null,"name":"\/app\/Http\/Controllers\/Dev\/NotificationController.php","line":33},{"index":17,"namespace":null,"name":"\/vendor\/illuminate\/container\/BoundMethod.php","line":87},{"index":18,"namespace":null,"name":"\/vendor\/illuminate\/container\/BoundMethod.php","line":31},{"index":19,"namespace":null,"name":"\/vendor\/illuminate\/container\/Container.php","line":564},{"index":20,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":373},{"index":21,"namespace":null,\
"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":339},{"index":22,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":313},{"index":23,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":275},{"index":24,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":255},{"index":27,"namespace":null,"name":"\/app\/Http\/Middleware\/CheckParamsExists.php","line":73},{"index":2\
8,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":31,"namespace":null,"name":"\/app\/Http\/Middleware\/DevAuthenticate.php","line":91},{"index":32,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":35,"namespace":null,"name":"\/app\/Http\/Middleware\/Log.php","line":37},{"index":36,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149},{"index":39,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":102},{"index":40,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":410},{"index":41,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","lin\
e":256},{"index":42,"namespace":null,"name":"\/vendor\/laravel\/lumen-framework\/src\/Concerns\/RoutesRequests.php","line":160},{"index":45,"namespace":null,"name":"\/app\/Http\/Middleware\/DebugResponse.php","line":19},{"index":46,"namespace":null,"name":"\/vendor\/illuminate\/pipeline\/Pipeline.php","line":149}],"duration":0.00164,"duration_str":"1.64ms","stmt_id":"\/vendor\/illuminate\/events\/Dispatcher.php:360","connection":"paas_test"}]},"swiftmailer_mails":{"count":0,"mails":[]},"gate":{"count":0,"messages":[]}}}`;
