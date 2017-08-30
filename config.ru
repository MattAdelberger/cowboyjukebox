use Rack::Static,
  :urls => ["/img", "/js", "/css"],
  :root => "public"

map "/" do
  run Proc.new  { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
end

map "/newwebsite" do
  run Proc.new  { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index2.html', File::RDONLY)
  ]
}
end