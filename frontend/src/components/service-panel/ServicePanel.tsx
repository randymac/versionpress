import * as React from 'react';
import { observer } from 'mobx-react';

import Button from './Button';
import FlashMessage from './flash-message/FlashMessage';
import Panel from './panel/Panel';
import VisualizationPanel from './visualizationPanel/VisualizationPanel';

import store from '../../stores/servicePanelStore';

import './ServicePanel.less';

interface ServicePanelProps {
  children?: React.ReactNode;
}

@observer
export default class ServicePanel extends React.Component<ServicePanelProps, {}> {
  onButtonClick = () => {
    store.changeVisibility();
  };

  render() {
    const { children } = this.props;
    const { message, isVisible, isVisualizationVisible } = store;

    return (
      <div>
        <Button onClick={this.onButtonClick} />
        {children}
        {message &&
          <FlashMessage message={message} />
        }
        <Panel isVisible={false} />
        <VisualizationPanel
          isVisible={isVisualizationVisible}
          environments={store.environments}
          visualization={store.visualization}
        />
      </div>
    );
  }
}
