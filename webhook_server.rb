require 'sinatra'
require 'json'

post '/' do
  push = JSON.parse(request.body.read)
  commit = push['commits'][0]['message']

  File.open("commit_db.rb", "a") do |line|
    line.puts "\r" + "#{commit}"
  end
end
