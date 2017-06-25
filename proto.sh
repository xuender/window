protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:./src/window \
--ts_out=service=true:./src/window \
-I ./proto \
./proto/*.proto

protoc --go_out=./go/window -I ./proto ./proto/*.proto
