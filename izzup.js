#!/usr/bin/env node

import 'dotenv/config'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const args = yargs(hideBin(process.argv))
    .option('dir', {
        describe: 'Directory to use for cache and indexes',
        default: process.env.TWTXT_CACHE_DIR,
    })
    .option('limit', {
        describe: 'Maximum number of records to process',
        default: process.env.TWTXT_PENDING_LIMIT,
    })
    .option('jobId', {
        describe: 'Process a particular job, "limit" is ignored',
        default: null,
    })
    .env()
    .parse();

if (!dirExists(args.dir)) {
    console.log('ABORTING: The cache dir must be defined and must already exist.')
    process.exit(1)
}