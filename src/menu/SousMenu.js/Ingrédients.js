import React from 'react'
import Tasks from 'components/Tasks/Tasks.js'
import CustomTabs from 'components/CustomTabs/CustomTabs.js'
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import { bugs, website, server } from 'variables/general.js'
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)
export default function Ingrédient() {
  const classes = useStyles()
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: 'Bugs',
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: 'Website',
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: 'Server',
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}
