#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e 
# If set, causes the pipeline to return the exit status of the
# last (rightmost) command to exit with a non-zero status. 
# It returns zero if all commands in the pipeline exit successfully. 
# This option is disabled by default.
set -o pipefail


if [[ -z "$BUILD_DIR" ]]; then
    BUILD_DIR="."
fi

main() {
    echo "Start building 🔩"

    version = $(zola --version)
    
    echo "Using $version"

    echo "Building in $BUILD_DIR directory"
    cd $BUILD_DIR

    echo Building with flags: ${BUILD_FLAGS:+"$BUILD_FLAGS"}
    zola build ${BUILD_FLAGS:+$BUILD_FLAGS}
}

main "$@"