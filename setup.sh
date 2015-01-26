#!/bin/bash
set -e

linux() {
    [[ $SYSTEM == 'Linux' ]]
}

mac() {
    [[ $SYSTEM == 'Darwin' ]]
}

installed() {
    hash "$1" 2>/dev/null
}

install_curl() {
    if ! installed curl; then
        sudo apt-get install -y curl
    fi
}

install_composer() {
    if [ ! -f composer.phar ]; then
        curl -sS https://getcomposer.org/installer | php
    fi
}

install_node() {
    if ! installed node || ! installed npm; then
        if linux; then
            curl -sL https://deb.nodesource.com/setup | sudo bash -
            sudo apt-get install -y nodejs
        elif mac && installed brew; then
            brew install node
        fi
    fi
}

install_grunt() {
  if ! installed grunt; then
    sudo npm -g install grunt-cli
  fi
}

install_composer_packages() {
    if [ ! -f composer.lock ]; then
        php composer.phar install
    else
        php composer.phar update
    fi
}

install_node_packages() {
    npm install
}

make_dirs() {
    grunt mkdir:static
}

compile() {
    grunt compile
}

main() {
    install_curl
    install_composer
    install_node
    install_grunt
    install_composer_packages
    install_node_packages
    make_dirs
    compile
}

main