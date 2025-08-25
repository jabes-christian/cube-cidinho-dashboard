import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useEditableData } from '../hooks/useEditableData';
import EditButtons from '../components/EditButtons';
import EditableField from '../components/EditableField';
import AgeAnalysis from '../components/AgeAnalysis';
import GenderDistribution from '../components/GenderDistribution';
import EngagementHours from '../components/EngagementHours';
import PaidTrafficInvestment from '../components/PaidTrafficInvestment';
import GeographicSegmentation from '../components/GeographicSegmentation';
import SocioeconomicProfile from '../components/SocioeconomicProfile';
import Interests from '../components/Interests';

const BaseEleitoral: React.FC = () => {
  const { isAdmin } = useAuth();
  const { data: title, updateData: updateTitle, isEditing } = useEditableData<string>('baseEleitoralTitle', 'Base Eleitoral', isAdmin);
  const { data: description, updateData: updateDescription } = useEditableData<string>('baseEleitoralDescription', 'Análise detalhada da base eleitoral.', isAdmin);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <EditableField value={title} onSave={updateTitle} isEditing={isEditing} isAdmin={isAdmin} />
        {isAdmin && <EditButtons section="baseEleitoral" />}
      </div>
      <EditableField value={description} onSave={updateDescription} isEditing={isEditing} isAdmin={isAdmin} />
      <AgeAnalysis />
      <GenderDistribution />
      <EngagementHours />
      <PaidTrafficInvestment />
      <GeographicSegmentation />
      <SocioeconomicProfile />
      <Interests />
    </div>
  );
};

export default BaseEleitoral;