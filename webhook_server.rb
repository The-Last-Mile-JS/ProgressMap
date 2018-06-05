require 'sinatra'
require 'json'

post '/' do
  #get commit message
  push = JSON.parse(request.body.read)
  commit = push['commits'][0]['message'].split.last

  #write to array in commit_db
  lines = []

  File.open('commit_db.js', 'r+') do |file|
    lines = file.each_line.to_a
    lines.insert(1, "\"#{commit}\"" + ",")
    file.rewind
    file.write(lines.join)
  end
end
