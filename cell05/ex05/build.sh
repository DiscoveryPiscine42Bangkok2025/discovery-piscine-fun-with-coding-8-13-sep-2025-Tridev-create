ARGV=$1

if [ "$1" = "" ]; then
    echo "No arguments supplied"
else
    for ARG in "$@"
        do
            touch ex05/ex$ARG
        done
fi