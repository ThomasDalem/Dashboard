#!/bin/bash

set -e
PGPASSWORD="dashboard" psql -U postgres -c "CREATE DATABASE dashboard"
PGPASSWORD="dashboard" psql -U postgres -b dashboard < /save/structure.sql
