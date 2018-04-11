export const questions = {
  schemas: [
    {
      schema: {
        goals04: {
          type: 'Checkboxes',
          title: 'What are your primary fitness goals?',
          fieldAttrs: {
            'data-bind': 'toggleCheckbox',
            'data-target': 'goal04-11-dynamic1',
            'data-condition': 'goal04-11'
          },
          options: [
            {
              val: 'goal04-1',
              label: 'Lose weight'
            },
            {
              val: 'goal04-2',
              label: 'Gain lean muscle mass'
            },
            {
              val: 'goal04-3',
              label: 'Increase overall strength'
            },
            {
              val: 'goal04-4',
              label: 'Get toned and defined'
            },
            {
              val: 'goal04-5',
              label: 'Improve cardiovascular fitness'
            },
            {
              val: 'goal04-6',
              label: 'Increase flexibility'
            },
            {
              val: 'goal04-7',
              label: 'Prepare for a life or athletic event'
            },
            {
              val: 'goal04-8',
              label: 'Recover from an injury'
            },
            {
              val: 'goal04-9',
              label: 'Learn a new movement or tool'
            },
            {
              val: 'goal04-10',
              label: 'Improve overall health'
            },
            {
              val: 'goal04-11',
              label: 'Other?'
            }
          ]
        },
        'goal04-11-dynamic1': {
          type: 'TextArea',
          title: 'Kindly describe your fitness goal...',
          editorAttrs: {
            maxlength: 500
          }
        }
      },
      fieldsets: [
        {
          legend: 'Goals',
          fields: [
            'goals04',
            'goal04-11-dynamic1'
          ]
        }
      ],
      templateId: 57,
      title: 'Goals',
      questionsCount: 1,
      version: 0.7
    },
    {
      schema: {
        exercisehistory02: {
          type: 'Select',
          title: 'How would you rate your fitness experience level?',
          options: [
            {
              val: 'exercisehistory02-1',
              label: 'Newcomer - I have no/little experience or need help creating a new routine'
            },
            {
              val: 'exercisehistory02-2',
              label: 'Familiar/Comfortable - I have a routine, but sometimes could use new suggestions'
            },
            {
              val: 'exercisehistory02-3',
              label: 'Expert - I know what I\'m doing'
            }
          ]
        }
      },
      fieldsets: [
        {
          legend: 'Exercise History',
          fields: [
            'exercisehistory02'
          ]
        }
      ],
      templateId: 58,
      title: 'Exercise History',
      questionsCount: 1,
      version: 0.7
    },
    {
      schema: {
        medical01: {
          type: 'Radio',
          title: 'Do you experience an irregular or racing heart rate during rest or exercise?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical01-1'
          },
          options: [
            {
              val: 'medical01-1',
              label: 'Yes'
            },
            {
              val: 'medical01-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical02: {
          type: 'Radio',
          title: 'Has a doctor ever said you have a heart condition and that you should only do physical activity recommended by a doctor?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical02-1'
          },
          options: [
            {
              val: 'medical02-1',
              label: 'Yes'
            },
            {
              val: 'medical02-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical03: {
          type: 'Radio',
          title: 'Do you feel pain in your chest when you do physical activity?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical03-1'
          },
          options: [
            {
              val: 'medical03-1',
              label: 'Yes'
            },
            {
              val: 'medical03-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical04: {
          type: 'Radio',
          title: 'Is your doctor currently prescribing drugs (for example, water pills) for your blood pressure or heart condition?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical04-1'
          },
          options: [
            {
              val: 'medical04-1',
              label: 'Yes'
            },
            {
              val: 'medical04-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical07: {
          type: 'Radio',
          title: 'Do you know of any other reason why you should not do physical activity?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical07-1'
          },
          options: [
            {
              val: 'medical07-1',
              label: 'Yes'
            },
            {
              val: 'medical07-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical05: {
          type: 'Radio',
          title: 'Do you lose your balance because of dizziness or do you ever lose consciousness?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical05-1'
          },
          options: [
            {
              val: 'medical05-1',
              label: 'Yes'
            },
            {
              val: 'medical05-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical06: {
          type: 'Radio',
          title: 'Do you have a bone or joint problem that could be made worse by a change in your physical activity?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleHelp',
            'data-target': 'help',
            'data-condition': 'medical06-1'
          },
          options: [
            {
              val: 'medical06-1',
              label: 'Yes'
            },
            {
              val: 'medical06-2',
              label: 'No'
            }
          ],
          help: 'We recommend you see a doctor before you start an exercise program.'
        },
        medical18: {
          type: 'Radio',
          title: 'Are you over 65 and not accustomed to vigorous exercise?',
          fieldClass: 'bbf-radiobuttons',
          options: [
            {
              val: 'medical18-1',
              label: 'Yes'
            },
            {
              val: 'medical18-2',
              label: 'No'
            }
          ]
        },
        medical20: {
          type: 'Radio',
          title: 'Are you diabetic? ',
          fieldClass: 'bbf-radiobuttons',
          options: [
            {
              val: 'medical20-1',
              label: 'Yes'
            },
            {
              val: 'medical20-2',
              label: 'No'
            }
          ]
        },
        medical21: {
          type: 'Radio',
          title: 'Are you pregnant?',
          fieldClass: 'bbf-radiobuttons',
          options: [
            {
              val: 'medical21-1',
              label: 'Yes'
            },
            {
              val: 'medical21-2',
              label: 'No'
            }
          ]
        },
        medical08: {
          type: 'TextArea',
          title: 'Do you have any current or past injuries—or have you had any surgeries—which may be relevant to physical activity?',
          editorAttrs: {
            maxlength: 500
          },
          fieldClass: 'bbf-checkboxes',
          fieldAttrs: {
            'data-bind': 'toggleKeyUp',
            'data-target': 'medical08-dynamic1,medical08-dynamic2,medical08-dynamic3,medical08-dynamic4',
            'data-condition': 'medical08'
          }
        },
        'medical08-dynamic1': {
          type: 'TextArea',
          title: 'When did it happen?',
          editorAttrs: {
            maxlength: 500
          }
        },
        'medical08-dynamic2': {
          type: 'TextArea',
          title: 'How did it happen?',
          editorAttrs: {
            maxlength: 500
          }
        },
        'medical08-dynamic3': {
          type: 'TextArea',
          title: 'Did you work with a physical therapist or rehab professional after?',
          editorAttrs: {
            maxlength: 500
          }
        },
        'medical08-dynamic4': {
          type: 'TextArea',
          title: 'Are there any exercises or movements that cause pain as a result?',
          editorAttrs: {
            maxlength: 500
          }
        },
        medical23: {
          type: 'Checkboxes',
          title: 'Have you ever been diagnosed with a specific medical condition? (Check all that apply)',
          fieldClass: 'bbf-checkboxes',
          options: [
            {
              val: 'medical23-1',
              label: 'Cardiovascular disease'
            },
            {
              val: 'medical23-2',
              label: 'High blood pressure'
            },
            {
              val: 'medical23-3',
              label: 'Low blood pressure'
            },
            {
              val: 'medical23-4',
              label: 'Heart attack'
            },
            {
              val: 'medical23-5',
              label: 'Heart murmur'
            },
            {
              val: 'medical23-6',
              label: 'Diabetes'
            },
            {
              val: 'medical23-7',
              label: 'Cancer'
            },
            {
              val: 'medical23-8',
              label: 'Neurological disorder'
            },
            {
              val: 'medical23-9',
              label: 'Respiratory issues'
            },
            {
              val: 'medical23-10',
              label: 'Asthma'
            },
            {
              val: 'medical23-11',
              label: 'Emphysema'
            },
            {
              val: 'medical23-12',
              label: 'Other'
            },
            {
              val: 'medical23-13',
              label: 'No history of medical conditions'
            }
          ]
        },
        medical19: {
          type: 'Radio',
          title: 'Are you currently taking any medications that may be relevant to physical activity?',
          fieldClass: 'bbf-radiobuttons',
          fieldAttrs: {
            'data-bind': 'toggleRadio',
            'data-target': 'medical19-dynamic1',
            'data-condition': 'medical19-1'
          },
          options: [
            {
              val: 'medical19-1',
              label: 'Yes'
            },
            {
              val: 'medical19-2',
              label: 'No'
            }
          ]
        },
        'medical19-dynamic1': {
          type: 'TextArea',
          title: 'If yes, please list below',
          editorAttrs: {
            maxlength: 1000
          }
        }
      },
      fieldsets: [
        {
          legend: 'PAR-Q: Heart',
          fields: [
            'medical01',
            'medical02',
            'medical03',
            'medical04'
          ]
        },
        {
          legend: 'PAR-Q: Other Medical Conditions',
          fields: [
            'medical07',
            'medical05',
            'medical06',
            'medical18',
            'medical20',
            'medical21'
          ]
        },
        {
          legend: 'Body Injury & Medical History',
          fields: [
            'medical08',
            'medical08-dynamic1',
            'medical08-dynamic2',
            'medical08-dynamic3',
            'medical08-dynamic4',
            'medical23',
            'medical19',
            'medical19-dynamic1'
          ]
        }
      ],
      templateId: 60,
      title: 'Medical Orthopedic History',
      questionsCount: 13,
      version: 0.7
    }
  ],
  totalQuestions: 15
}