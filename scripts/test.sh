# This script is used by CircleCI to execute automated tests.

# Build all assets
npm run build

# Switch to the build directory
pushd build

# Boot a static file server
php -S localhost:3001 &

# Save the PID of the server to a variable
APP_TEST_PID=$(echo $!)

# Execute tests
PORT=3001 npm run test:ci

# Exit the build directory
popd

# Kill the server
kill $APP_TEST_PID
