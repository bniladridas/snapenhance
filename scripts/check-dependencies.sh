#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "jq is not installed. It's required to parse JSON responses."
    echo "Would you like to install it? (y/n)"
    read -r answer
    
    if [[ "$answer" =~ ^[Yy]$ ]]; then
        # Check the operating system
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            echo "Installing jq using Homebrew..."
            if ! command -v brew &> /dev/null; then
                echo "Homebrew is not installed. Please install Homebrew first:"
                echo "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
                exit 1
            fi
            brew install jq
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            # Linux
            if command -v apt-get &> /dev/null; then
                echo "Installing jq using apt..."
                sudo apt-get update
                sudo apt-get install -y jq
            elif command -v yum &> /dev/null; then
                echo "Installing jq using yum..."
                sudo yum install -y jq
            else
                echo "Could not determine package manager. Please install jq manually."
                exit 1
            fi
        else
            echo "Unsupported operating system. Please install jq manually."
            exit 1
        fi
    else
        echo "Please install jq manually to use the test scripts."
        exit 1
    fi
fi

echo "✅ jq is installed. You can now run the test scripts."
