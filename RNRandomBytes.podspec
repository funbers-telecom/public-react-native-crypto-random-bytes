
Pod::Spec.new do |s|
  s.name         = "RNRandomBytes"
  s.version      = "1.0.0"
  s.summary      = "RNRandomBytes"
  s.description  = <<-DESC
                  RNRandomBytes
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author       = { "author" => "author@domain.cn" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/funbers/react-native-crypto-random-bytes.git", :tag => "master" }
  s.source_files = "ios/*.{h,m}"
  s.requires_arc = true
  s.homepage = "https://github.com/funbers/react-native-crypto-random-bytes"

  s.dependency "React-Core"
  #s.dependency "others"

end