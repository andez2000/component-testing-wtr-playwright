import { defaultReporter, summaryReporter } from '@web/test-runner';
import { junitReporter } from '@web/test-runner-junit-reporter';

const outDir = process.env.OUTDIR || '.';

export default {
    browserLogs: true,
    reporters: [
        defaultReporter(),
        summaryReporter(),
        junitReporter({
          reportLogs: true,
          outputPath: `${outDir}/test-results/junit/xunit-report.xml`,
        }),
      ],
      testFramework: {
        config: {
          timeout: 4000,
        },
      },
    


    // reporters: [
    //     // {
    //     //     "name": "dot"
    //     // }
    //     // use the default reporter only for reporting test progress
    //     // defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    // ],
    // coverageConfig: {
    //     report: false,
    //     reportDir: 'test-coverage',
    //     threshold: {
    //         statements: 70,
    //         branches: 70,
    //         functions: 70,
    //         lines: 70,
    //     },
    // },
};